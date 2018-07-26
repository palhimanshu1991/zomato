<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use User;
use Address;

class UserAddress extends Model
{

    public function user()
    {
        return $this->belongsTo(User::class);
    }


    public function address()
    {
        return $this->belongsTo(Address::class);
    }
}
