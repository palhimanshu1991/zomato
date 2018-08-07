<?php

namespace App\Http\Requests\Restaurants;

use App\Http\Requests\AbstractApiRequest;

class CreateRestaurantRequest extends AbstractApiRequest
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
            'address.street' => 'required',
            'address.locality' => 'required',
            'address.landmark' => 'required',
            'address.pincode' => 'required',
            'address.state_id' => 'required | exists:states,id',
            'address.district_id' => 'required | exists:districts,id',
            'category_id' => 'required | exists:categories,id',
            'cuisine_id' => 'required | exists:cuisines,id',
        ];
    }
}
