<?php

namespace App\Tasks;

use App\Image;
use App\Contracts\Imageable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

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
    public function __construct($type, $request, Imageable $model)
    {
        $ext = $request->image->extension();

        $imageurl = Storage::putFileAs(
            'media', $request->file('image'), $type . $model->id . "." . $ext
        );

        $this->text = $imageurl;

        $this->model = $model;
    }

    public function handle()
    {
        $image = new Image;

        $image->path = $this->text;

        $this->model->images()->save($image);
    }

}