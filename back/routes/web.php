<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function (){
   return (view('welcome'));
});

Route::get('/contacts', [\App\Http\Controllers\ContactsController::class, 'getContacts'])
    -> name('contactsGet');

Route::post('/contacts', [\App\Http\Controllers\ContactsController::class, 'postContacts']) -> name('contactsPost');

Route::put('/', function () {
    return 0;
}) -> name('contactsPut');

Route::delete('/', [\App\Http\Controllers\ContactsController::class, 'deleteContacts']) -> name('contactsDelete');

Route::get('files', [\App\Http\Controllers\FilesController::class, 'getFiles']);
Route::post('files', [\App\Http\Controllers\FilesController::class, 'postFiles']);
Route::delete('files', [\App\Http\Controllers\FilesController::class, 'deleteFiles']);
