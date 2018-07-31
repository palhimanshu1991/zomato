<?php

namespace App\Contracts;

interface Imageable
{
    public function images();

    public function getPrefix();
}