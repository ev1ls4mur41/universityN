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

Route::get('/contacts', [\App\Http\Controllers\ContactsController::class, 'getContacts'])
    -> name('contactsGet');

Route::post('/', function () {
    return 0;
}) -> name('contactsPost');

Route::put('/', function () {
    return 0;
}) -> name('contactsPut');

Route::delete('/', function () {
    return 0;
}) -> name('contactsDelete');
