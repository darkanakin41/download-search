<?php

namespace App\API\Data;

use GuzzleHttp\Client;

class TheMovieDB
{
    const API_KEY = "551b815e813c715ad6387da50fb1d325";
    const BASE_URI = "https://api.themoviedb.org/3/";
    const MEDIA_URL = "https://image.tmdb.org/t/p/original";


    public function __construct()
    {
    }


    /**
     * Search a tv show based on his title
     *
     * @param string $title
     * @param bool   $all
     *
     * @return array|null
     */
    public function searchTvShow($title, $all = false)
    {
        $client = $this->getClient();

        $urlParameters = [
            "language" => "fr",
            "api_key" => self::API_KEY,
            "query" => $title,
            "include_image_language" => "fr",
        ];

        $response = $client->get(sprintf('%s?%s', "search/tv", http_build_query($urlParameters)));

        $data = json_decode($response->getBody()->getContents(), true);

        if ($data['total_results'] === 0) {
            return null;
        }

        return $all ? $data['results'] : $data['results'][0];
    }

    private function getClient()
    {
        return new Client(['base_uri' => $this->getBaseURL()]);
    }

    private function getBaseURL()
    {
        return self::BASE_URI;
    }

    /**
     * Search a movie based on his title
     *
     * @param string $title
     * @param bool   $all
     *
     * @return array|null
     */
    public function searchMovie($title, $all = false)
    {
        $client = $this->getClient();

        $urlParameters = [
            "language" => "fr",
            "api_key" => self::API_KEY,
            "query" => $title,
            "include_image_language" => "fr",
        ];

        $response = $client->get(sprintf('%s?%s', "search/movie", http_build_query($urlParameters)));

        $data = json_decode($response->getBody()->getContents(), true);

        if ($data['total_results'] === 0) {
            return null;
        }

        return $all ? $data['results'] : $data['results'][0];
    }

    /**
     * Retrieve a movie based on his ID
     *
     * @param integer $id
     *
     * @return array|null
     */
    public function getMovie($id)
    {
        $client = $this->getClient();

        $urlParameters = [
            "language" => "fr",
            "api_key" => self::API_KEY,
            "include_image_language" => "fr",
        ];

        $response = $client->get(sprintf('movie/%d?%s', $id, http_build_query($urlParameters)));

        $data = json_decode($response->getBody()->getContents(), true);
        if (isset($data['status_code'])) {
            return null;
        }
        return $data;
    }

    /**
     * Retrieve a tv show based on his ID
     *
     * @param integer $id
     *
     * @return array|null
     */
    public function getTvShow($id)
    {
        $client = $this->getClient();

        $urlParameters = [
            "language" => "fr",
            "api_key" => self::API_KEY,
            "include_image_language" => "fr",
        ];

        $response = $client->get(sprintf('tv/%d?%s', $id, http_build_query($urlParameters)));

        $data = json_decode($response->getBody()->getContents(), true);
        if (isset($data['status_code'])) {
            return null;
        }
        return $data;
    }

    /**
     * Retrieve a tv show based on his ID
     *
     * @param integer $id
     * @param integer $sid
     *
     * @return array|null
     */
    public function getTvShowSeason($id, $sid)
    {
        $client = $this->getClient();

        $urlParameters = [
            "language" => "fr",
            "api_key" => self::API_KEY,
            "include_image_language" => "fr",
        ];

        $response = $client->get(sprintf('tv/%d/season/%d?%s', $id, $sid, http_build_query($urlParameters)));

        $data = json_decode($response->getBody()->getContents(), true);
        if (isset($data['status_code'])) {
            return null;
        }
        return $data;
    }
}
