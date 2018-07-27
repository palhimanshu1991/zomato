<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Like extends Model

{
    protected $guarded = ['$id'];

    public function likeable()
    {
        return $this->morphTo();
    }
}
