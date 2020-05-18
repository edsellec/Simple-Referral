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

Route::get('/', function () {
    //Cookie::queue(Cookie::make('test', '123', 60));

    return view('welcome');
});

Route::get('/cookie', function () {
    return Cookie::get('referral');
});

Route::get('/referral-link', 'HomeController@referral_url');

Route::get('/referrer', 'HomeController@referrer');

Route::get('/referrals', 'HomeController@referrals');

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/view-records','HomeController@referral_db');

Auth::routes();