<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User1;
use Illuminate\Http\Request;

class ContactsController extends Controller
{
    /**
     * @return \Illuminate\Http\JsonResponse
     *
     *
     * @OA\Get(
     *path="/contacts",
     *operationId = "getContacts",
     *tags={"contacts"},
     *summary="Get Contacts",
     *@OA\Response(
     *response = "200",
     *description ="OK",
     *     @OA\MediaType(
     *     mediaType = "application/json",
     *           @OA\Schema(
     *                  @OA\Property(type="boolean", property="success", example="false"),
     *                  @OA\Property(type="array", property="error", @OA\Items(type="string", example="asdasdasdas")),
     *)
     *)
     *)
     *)
     */
    protected function getContactsStudents()
    {
        $cont = User1::all();
      /*  $array = [
            'firstName' => 'User',
            'lastName' => 'Name',
            'middleName' => '',
            'userLogin' => 'QweRty@asd.zxc',
            'numberDiary' => '1234/123',
            'userGroup' => 'CS50',
            'phoneNumber' => '78889994561',
            'isLeader' => '1',
            'imgLink' => 'ibb.co/qasdxc',
            'averageMark' => '4.0',
        ];*/
        return response()->json($cont, 200);
    }

    /**
     * @return \Illuminate\Http\JsonResponse
     *
     * @OA\Post(
     *     path="/contacts",
     *     operationId="regUser",
     *     tags={"contacts"},
     *     summary="Registration user",
     *     @OA\Response(
     *          response="201",
     *          description="Successful operation"
     *     )
     * )
     *
     *
     */
    protected function postContacts()
    {
        $arr = [
            'notice' => 'CREATED'
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
}
