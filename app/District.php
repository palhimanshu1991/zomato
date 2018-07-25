<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use State;

class District extends Model
{
    public function state()
    {
        return $this->belongsTo(State::class);
    }
}
