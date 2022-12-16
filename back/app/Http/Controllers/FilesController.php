<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;


class FilesController extends Controller
{
    protected function getFiles()
    {
        $array = [ //в зависимости от пользователей нужно будет подтягивать
            // данные по ключу, пока не реализовано (не знаю как)

            'dateLoad' => '22.12.22',
            'fileName' => 'asdasd',
            'fileType' => 'asdasdasd',
            'fileDiscipline' => 'asdasdasdsad',
            'fileLink' => 'asdasdasdasd.zxc'
        ];
        return response()->json($array, 200);
    }

    protected function postFiles()
    {
        $arr = [
            'notice' => 'CREATED',
        ];
        return response()->json($arr, 201);
    }

    protected function deleteFiles()
    {
        $arr = [
            'notice' => 'DELETED',
        ];
        return response()->json($arr, 204);
    }


}
