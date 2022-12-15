<?php

namespace App\Http\Controllers;

use     Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    /**
     * @OA\Info(
     *     title="Spaghetti API docs",
     *     version="1.0"
     * )
     * @OA\Server(
     *     description="Spaghetti server",
     *     url="http://127.0.0.1:8000/api/"
     * )
     * @OA\SecurityScheme(
     *     type="apiKey",
     *     in="header",
     *     name="Authorization",
     *     securityScheme="authorization"
     * )
     */

    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
}
