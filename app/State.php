<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Address;

class State extends Model
{
    public function addresses()
    {
        return $this->hasMAny(Address::class);
    }
}
