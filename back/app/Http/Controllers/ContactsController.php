<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;

class ContactsController extends Controller
{
    use ValidatesRequests;

    /**
     * @OA\Get(
     *path="/contacts,
     *operationId = "contacts",
     *tags={"contacts"},
     *summary="Get Contacts",
     *     @OA\Response(
     *response = "200",
     *description ="OK"
     * )
     *)
     * */
    protected function getContacts()
    {
        $array = [ //в зависимости от пользователей нужно будет подтягивать
            // данные по ключу, пока не реализовано (не знаю как)
            'firstName' => 'User',
            'lastName' => 'Name',
            'userLogin' => 'QweRty@asd.zxc',
            'numberDiary' => '1234/123',
            'userGroup' => 'CS50',
            'phoneNumber' => '78889994561',
            'isTeacher' => '0',
            'isAdmin' => '0',
            'isLeader' => '1',
            'imgLink' => 'ibb.co/qasdxc',
            'averageMark' => '4.0',
            'userPass' => '4.0'
        ];
        return response()->json($array, 200);
    }

    protected function postContacts()
    {
        $arr = [
            'notice' => 'CREATED',
        ];
        return response()->json($arr, 201);
    }

    protected function deleteContacts()
    {
        $arr = [
            'notice' => 'DELETED',
        ];
        return response()->json($arr, 204);
    }

/*тестовое изменение*/
}
