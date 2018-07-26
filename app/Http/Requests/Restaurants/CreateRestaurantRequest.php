<?php

namespace App\Http\Requests\Restaurants;

use Illuminate\Foundation\Http\FormRequest;

class CreateRestaurantRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */

    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required',
            'street' => 'required',
            'locality' => 'required',
            'landmark' => 'required',
            'pincode' => 'required',
            'state_id' => 'required',
            'district_id' => 'required',
            'category_id' => 'required',
            'cuisine_id' => 'required',
        ];
    }
}
