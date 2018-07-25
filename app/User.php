<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];


    protected $hidden = [
        'password', 'remember_token',
    ];

    public function reviews(){
        $this->hasMany('App\Review');
    }

    public function comments(){
        $this->hasMany('App\Comment');
    }

    public function likes(){
        $this->hasMany('App\Like');
    }

    public function addresses(){
        $this->hasMany('App\UserAddress');
    }
}
