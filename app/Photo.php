<?php

namespace App;

use App\Tasks\Commentable;
use App\Traits\HasComments;
use Illuminate\Database\Eloquent\Model;

class Photo extends Model implements Commentable
{
    use HasComments;

    public function imageable()
    {
        return $this->morphTo();
    }
}
