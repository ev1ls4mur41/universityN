<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Teacher extends Model
{
    use HasFactory;

    protected $fillable = [
        'firstName',
        'lastName',
        'middleName',
        'userLogin',
        'numberDiary',
        'subject',
        'phoneNumber',
        'isLeader',
        'imgLink',
        'averageMark',
    ];

    /*
     *
     *       $table->id();
            $table->string('firstName');
            $table->string('lastName');
            $table->string('')->nullable();
            $table->string('userLogin')->unique();
            $table->string('phone_number')->unique();
            $table->string('post');
            $table->string('imgLink');
            $table->string('userPass');
            $table->string('token')
                ->unique()
                ->nullable();
            $table->timestamps();
        });
     * */
    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'userPass',
        'remember_token',
    ];
}
