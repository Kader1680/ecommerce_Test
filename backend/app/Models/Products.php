<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    use HasFactory;
    protected $fillable = [
        "title" ,
        "oldPrice" ,
        "newPrice" ,
        "image" ,
        "color" ,
        "size" ,
        "shipping" ,
        "discount" ,
        "id_user" ,
        "brand",
        "condition" ,
        "category" ,
        "review" ,
        "model",
        "description",
        "quantity"
    ];

     
}
