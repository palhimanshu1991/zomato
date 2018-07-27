<?php

namespace App;

use App\Contracts\Commentable;
use App\Traits\HasComments;
use Illuminate\Database\Eloquent\Model;

class Image extends Model implements Commentable
{
    use HasComments;

    public function imageable()
    {
        return $this->morphTo();
    }
}
