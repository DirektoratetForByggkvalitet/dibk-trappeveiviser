##

The dibk-trappeveiviser project is a wizard that uses [losen](https://github.com/DirektoratetForByggkvalitet/losen) .  
The documentation for losen can be found here https://dibk-storybook.firebaseapp.com/.

## Development

You need to link [DirektoratetForByggkvalitet/losen](https://github.com/DirektoratetForByggkvalitet/losen) to run this project locally. Head over to you clone of that repo in the terminal and type `yarn link`.

Head back to this repo in you terminal and type `yarn link losen`.

Then run `yarn && yarn start` to run the development server.

## Testing

To run the tests you need to type the command `yarn test`.

The data for this wizard can be found in `src/api/bus-trappeveiviser.json`.

## Deploy


To deploy you need the firebase tools.
Install it with the following command:

`yarn global add firebase-tools`

Follow the instructions for:
`firebase login`

To build the production bundle you run `yarn run build`.
Then you are ready to type `yarn deploy` :sparkles:

## Deploy to production

First build this project `npm run build` (make sure you are using latest version of [losen](https://ghttps://github.com/DirektoratetForByggkvalitet/losen).  
For dibk.no: 
Then navigate to the wizard page in Episerver
Select folder icon (folder top right) then press "Media" (between "Blokker" and "Skjemaer").
Scroll all the way to the bottom and chose "For denne Side".
Upload the Javascript bundle found in `build/static` after the build step.
Then press the menu icon (last icon row right) and update the file in "Javascriptfil for veiviseren" to the file you just uploaded.
The last step is to publish the page.
The pictures and text changes are uploaded to Episerver.
