<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    protected $guarded = ['id'];

    public function state()
    {
        return $this->belongsTo('App\Comment');
    }

    public function district()
    {
        return $this->belongsTo('App\District');
    }


}
