<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class State extends Model
{
    public function addresses(){
        return  $this->hasMAny('App\Address');
    }
}
