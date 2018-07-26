<?php

namespace App;

use Illuminate\Database\Eloquent\Model;



class Address extends Model
{
    public function state()
    {
        return $this->belongsTo(State::class);
    }

    public function district()
    {
        return $this->belongsTo(District::class);
    }
}
