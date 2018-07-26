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


    public function reviews()
    {
        $this->hasMany(Review::class);
    }

    public function comments()
    {
        $this->hasMany(Comment::class);
    }

    public function likes()
    {
        $this->hasMany(Like::class);
    }

    public function addresses()
    {
        $this->hasMany(UserAddress::class);
    }
}
