<?php

namespace App\API\Data;

use GuzzleHttp\Client;
use GuzzleHttp\Exception\ClientException;
use GuzzleHttp\RequestOptions;

class TheTVDB
{
    const USERNAME = "darkanakin41dtu";
    const UNIQUE_ID = "TN22ISQK3UUQ2QO6";
    const API_KEY = "2YV6ZI7SLZ11CTQP";

    const BASE_URI = "https://api.thetvdb.com/";
    const MEDIA_URL = "https://image.tmdb.org/t/p/original";

    /** @var string|null */
    private static $token;

    public function __construct()
    {
    }

    /**
     * Search a tv show based on his title
     *
     * @param string $title
     *
     * @return array|null
     */
    public function searchShow($title)
    {
        $client = $this->getClient();

        $parameters = [
            'name' => $title,
        ];

        try {
            $response = $client->get(sprintf('%s?%s', "search/series", http_build_query($parameters)), [
                RequestOptions::HEADERS => $this->getHeaders(),
            ]);
        } catch (ClientException $e) {
            if ($e->getResponse()->getStatusCode() === 401) {
                $this->login();
                return $this->searchShow($title);
            }
            return null;
        }

        $data = json_decode($response->getBody()->getContents(), true);

        if (!isset($data['data'])) {
            return null;
        }

        return $data['data'][0];
    }

    private function getClient()
    {
        return new Client([
            'base_uri' => $this->getBaseURL(),
        ]);
    }

    private function getBaseURL()
    {
        return self::BASE_URI;
    }

    /**
     * Build the header list
     * @return array
     */
    private function getHeaders()
    {
        $headers = [
            "Content-Type" => "application/json",
            "Accept" => "application/json",
        ];
        if (self::getToken() !== null) {
            $headers["Authorization"] = sprintf('Bearer %s', self::getToken());
            $headers["Accept-Language"] = "fr";
        }
        return $headers;
    }

    /**
     * @return string|null
     */
    public static function getToken(): ?string
    {
        return self::$token;
    }

    /**
     * @param string|null $token
     */
    public static function setToken(?string $token): void
    {
        self::$token = $token;
    }

    private function login()
    {
        self::setToken(null);
        $client = $this->getClient();

        $parameters = [
            "apikey" => self::API_KEY,
            "username" => self::USERNAME,
            "userkey" => self::UNIQUE_ID,
        ];

        $response = $client->post("login", [
            RequestOptions::JSON => $parameters,
            RequestOptions::HEADERS => $this->getHeaders(),
        ]);

        $data = json_decode($response->getBody()->getContents(), true);

        if (!isset($data['token'])) {
            return null;
        }

        self::setToken($data['token']);
    }

    /**
     * Retrieve episodes from the given serie
     *
     * @param int $id
     * @param int $page
     *
     * @return array|null
     */
    public function getEpisodes($id, $page = 1)
    {
        $client = $this->getClient();

        try {
            $response = $client->get(sprintf('series/%d/episodes?%s', $id, http_build_query(['page' => $page])), [
                RequestOptions::HEADERS => $this->getHeaders(),
            ]);
        } catch (ClientException $e) {
            if ($e->getResponse()->getStatusCode() === 401) {
                $this->login();
                return $this->getEpisodes($id, $page);
            }
            return null;
        }

        $data = json_decode($response->getBody()->getContents(), true);

        if (!isset($data['data'])) {
            return null;
        }

        return $data;
    }

    /**
     * Retrieve a tv show based on his ID
     *
     * @param int $id
     *
     * @return array|null
     */
    public function getShow($id)
    {
        $client = $this->getClient();

        try {
            $response = $client->get(sprintf('series/%d', $id), [
                RequestOptions::HEADERS => $this->getHeaders(),
            ]);
        } catch (ClientException $e) {
            if ($e->getResponse()->getStatusCode() === 401) {
                $this->login();
                return $this->getShow($id);
            }
            return null;
        }

        $data = json_decode($response->getBody()->getContents(), true);

        if (!isset($data['data'])) {
            return null;
        }

        return $data['data'];
    }

    /**
     * Retrieve episodes from the given serie
     *
     * @param int $id
     * @param int $snumber
     *
     * @return array|null
     */
    public function getShowImage($id, $type = 'poster')
    {
        $client = $this->getClient();

        $headers = $this->getHeaders();
        $headers["Accept-Language"] = "en";


        try {
            $response = $client->get(sprintf('series/%d/images/query?%s', $id, http_build_query([
                'keyType' => $type,
            ])), [
                RequestOptions::HEADERS => $headers,
            ]);
        } catch (ClientException $e) {
            if ($e->getResponse()->getStatusCode() === 401) {
                $this->login();
                return $this->getShowImage($id);
            }

            return null;
        }

        $data = json_decode($response->getBody()->getContents(), true);

        if (!isset($data['data'])) {
            return null;
        }

        return $data['data'];
    }

    /**
     * Retrieve episodes from the given serie
     *
     * @param int $id
     * @param int $snumber
     *
     * @return array|null
     */
    public function getSeasonPoster($id, $snumber)
    {
        $client = $this->getClient();

        $headers = $this->getHeaders();
        $headers["Accept-Language"] = "en";


        try {
            $response = $client->get(sprintf('series/%d/images/query?%s', $id, http_build_query([
                'keyType' => 'season',
                'subKey' => $snumber
            ])), [
                RequestOptions::HEADERS => $headers,
            ]);
        } catch (ClientException $e) {
            if ($e->getResponse()->getStatusCode() === 401) {
                $this->login();
                return $this->getSeasonPoster($id, $snumber);
            }

            return null;
        }

        $data = json_decode($response->getBody()->getContents(), true);

        if (!isset($data['data'])) {
            return null;
        }

        return $data['data'];
    }

    public function isPosterOK($url){
        $client = $this->getClient();

        try {
            $client->get(sprintf('https://www.thetvdb.com/banners/%s', $url));
        } catch (ClientException $e) {
            return false;
        }
        return true;
    }
}
