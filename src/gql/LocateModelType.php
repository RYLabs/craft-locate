<?php
namespace swixpop\locate\gql;

use craft\gql\GqlEntityRegistry;
use craft\gql\base\GqlTypeTrait;
use GraphQL\Type\Definition\Type;

class LocateModelType
{
    use GqlTypeTrait;

    public static function getName(): string
    {
        return 'LocateModel';
    }

    public static function getFieldDefinitions(): array
    {
        return [
            'lat'          => [
                'name'        => 'lat',
                'type'        => Type::string(),
                'description' => 'The latitude coordinate.',
            ],
            'lng'          => [
                'name'        => 'lng',
                'type'        => Type::string(),
                'description' => 'The longitude coordinate.',
            ],
            'location'     => [
                'name'        => 'location',
                'type'        => Type::string(),
                'description' => 'The location.',
            ],
            'placeid'      => [
                'name'        => 'placeid',
                'type'        => Type::string(),
                'description' => 'The placeid.',
            ],
            'locationData' => [
                'name'        => 'locationData',
                'type'        => Type::string(),
                'description' => 'The location data.',
            ],
        ];
    }
}