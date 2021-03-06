<?php

namespace App\Tasks;

use App\Image;
use App\Contracts\Imageable;
use Illuminate\Database\Eloquent\Model;

class CreateImageTask extends AbstractTask
{
    private $text;
    /**
     * @var Model
     */
    private $model;

    /**
     * CreateCommentTask constructor.
     * @param $text
     * @param Commentable $model
     */
    public function __construct($path, Imageable $model)
    {
        $this->text = $path;
        $this->model = $model;
    }

    public function handle()
    {
        $image = new Image;
        $image->path = $this->text;

        $this->model->images()->save($image);
    }

}