# linguijs-sample

This is an example repository showing how to use Localazy with LinguiJs for localization management.
To learn more, check out the [blog post](https://localazy.com/blog/how-to-localise-your-react-app-with-linguijs-and-localazy) describing the set up in detail.

## Testing the app only
- `npm install` and then `npm run start`

## Testing with own app in Localazy
1. sign up for [Localazy](https://localazy.com/register),
2. [create an app](https://localazy.com/my/create). Although English is recommended, you may use any language as source 
3. select *JSON* format option and install Localazy [CLI](https://testing.localazy.com/docs/cli/installation),
4. Retrieve your _writeKey_ and _readKey_ from the integration guide page and change them in `localazy.json`,
5. run `localazy upload`,
6. when you have accepted strings in other languages, run `npm run lokalise` and check locales folder for the new translations,
7. install dependencies `npm install`
8. run the app `npm run start`

## Adjusting for your own project
1. follow steps 1 - 4 from above,
2. remove every locale file except for your source locale (presumably en.json)
3. fill in your source phrases,
4. continue from step 5
