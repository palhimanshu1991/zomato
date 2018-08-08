<?php

namespace App\Traits;
/**
 * Created by PhpStorm.
 * User: instaveritas
 * Date: 27/07/18
 * Time: 5:20 PM
 */

trait GetPrefix
{

    public function getPrefix()
    {

        return $this->title;
    }

}