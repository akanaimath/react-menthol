# react-menthol
React dom elements extensively used while creating components.

To install using npm or yarn
```
npm install react-menthol --save;
or 
yarn add react-menthol;
```
Usage 
```
import { Error, Loading, Maintenance, NoData, Tooltip, Legend } from 'react-menthol';
import 'react-menthol/menthol.css';
```
## Packages
- [Error](#error)
- [Loading](#loading)
- [Maintenance](#maintenance)
- [NoData](#nodata)
- [Tooltip](#tooltip)
- [Legend](#legend)

### Error
This component is used to show/hide a clean representation for error msg.

```
import { Error } from 'react-menthol' ;  
import 'react-menthol/menthol.css';

render( 
        <div>
         <Error             
            error="Pass the error over here"
             />
        </div>
      document.getElementById( 'app' ) 
);
```
#### Params passed

|  @param  |  dataType  |   explaination  |  defaultValue  |  Required  |
|----------|------------|-----------------|----------------|------------|
| error | string | pass the error msg | false | yes |

##### You can pass classes also as a prop
| className Prop | className used |
|----------------|----------------|
|classNameErrorWrapper| "consume"|
| className| "consume"|
| classNameOctagon|  "shape-octagon"|
| classNameErrorMsg|  "error-msg"|
| classNameError|  "error-label"|
| classNameShape|  "error-shape"|
| classNameClose | "error-close"|

### Loading
This generic component is used for displaying loading icon on the doms when needed. It has two features to either use a existing set of svg elements or use a image to show loading.

```
import { Loading } from 'react-menthol' ;  
import 'react-menthol/menthol.css';

render( 
        <div>
         <Loading             
                loadSvg= false
                svgType='balls'
             />
        </div>
      document.getElementById( 'app' ) 
);
```
#### Params passed

|  @param  |  dataType  |   explaination  |  defaultValue  |  Required  |
|----------|------------|-----------------|----------------|------------|
| loadSvg | boolean | load predefined svg images | false | optional |
| svgType | string | choose from existing svgs balls,bars,bubbles,cubes,spin,spinningBubbles,spokes  | "balls" | true, when loadSvg is true |  
| loadingImg | path | path to the images | | optional, used when loadSvg is false |
| alt | string | when image is not available | img not found | optional |
|width| string | width of image |'90px'| optional |
|height| string | height of image | '90px'| optional |
| marginLeft| string | margin-left |'35%'| optional |
|marginTop| string | margin-top| '5%'| optional |
|styles | style Object | additional styles | {}| optional |
|classNameWrapper| string | | 'consume'| optional |
|classNameImg | string |   | '' | optional |


### Maintenance
This Component is used when its parent is still under development/not available at the moment
```
import { Maintenance } from 'react-menthol' ;  
import 'react-menthol/menthol.css';

render( 
        <div>
         <Maintenance             
            heading= `We'll be back soon!`
            paragraph= `Sorry for the inconvinence,but we're performing some maintenance at the moment`
             />
        </div>
      document.getElementById( 'app' ) 
);
```
#### Params passed

|  @param  |  dataType  |   explaination  |  defaultValue  |  Required  |
|----------|------------|-----------------|----------------|------------|
| src | path | path of image | '../public/images/underProgress.gif' | optional |
|alt | string | msg when img not found | 'img not found' | optional |
|width| string | | '100px'| optional |
|height| string | | '75px'| optional |
|heading| string | heading |"We'll be back soon!"| optional |
|paragraph| string | string | "Sorry for the inconvinence,but we're performing some maintenance at the moment"| optional |
|classNameWrapper| string | | 'consume'|optional |
|classNameImg| string | | '' | optional |

### NoData
This generic component is used in the components to show beautifully when the data is empty. 

```
import { NoData } from 'react-menthol' ;  
import 'react-menthol/menthol.css';

render( 
        <div>
         <NoData             
            heading= `No Matching items found!`,
            paragraph= `check the settings or refresh `,
             />
        </div>
      document.getElementById( 'app' ) 
);
```
#### Params passed

|  @param  |  dataType  |   explaination  |  defaultValue  |  Required  |
|----------|------------|-----------------|----------------|------------|
|heading| string | heading |"No Matching items found!" | optional |
|paragraph| string | string | "check the settings or refresh " | optional |
|classNameWrapper| string | | 'chtr-No-data-wrapper' | |
|classNameHeading| string | | "noData-heading" | |
|classNameIconDiv | string | | noData-iconDiv" | |
|classNameParagraph | string | | "noData-paragraph" | |

### Tooltip
This is a generic component for tooltip, which accepts 
- array of objects with keys as key, alias and color
- dataObj which contains actual data
The data passed is looped and check if the key is present in dataObj then it will display. 
- An additional prop of heading can also be added to show the heading of tooltip
- Tooltip data can also be array of strings representing the key names from dataObj that needs to be displayed.

***Note*** This is just a generic comp, user needs to position this tooltip accordingly to its usage

```
import { Tooltip } from 'react-menthol' ;  
import 'react-menthol/menthol.css';

render( 
        <div>
         <Tooltip             
		    data = [ {key : x, alias:"Xvalue", color:"black"},{key : y, alias:"Yvalue", color:"black"}]
		    dataObj= { x: 1, y:2 ,z: 4 }
		    heading= "",
		/>
        </div>
      document.getElementById( 'app' ) 
);
```
#### Params passed

|  @param  |  dataType  |   explaination  |  defaultValue  |  Required  |
|----------|------------|-----------------|----------------|------------|
|data | array | array of objects with keys key,alias, color |  [] | yes |
| dataObj | object | actual data object containing information | {} | yes |
|heading| string | heading of tooltip | "" | optional |
|regexForReplaceParamInHeading:| regexexp| any params in heading is replaced with its value from dataObj | "/\${(.*?)\}/g" | optional |
|classNameWrapper| | |"consume"| |
|classNameTooltip|  | |"menthol-tooltip" | |
|classNameTooltipHeading| | |"menthol-tooltip-heading" | |


### Legend
- Generic component used to show the legend in horizontal or vertical format
- Data contains objects with keys as key, color, active 
- Each key will be displayed and a color box is shown below it
- active prop is used to toggle legend , and can be accessed through onClick function and maintain whether its active or not

```
import { Legend } from 'react-menthol' ;  
import 'react-menthol/menthol.css';

render( 
        <div>
         <Legend             
                layout= "horizontal"
			    data = [{ key: "Example1", color:"#FFFFFF", active: true },
                { key: "Example2", color:"#000000", active: true }]
		        onClick = {this.handleClick}
             />
        </div>
      document.getElementById( 'app' ) 
);
```
#### Params passed

|  @param  |  dataType  |   explaination  |  defaultValue  |  Required  |
|----------|------------|-----------------|----------------|------------|
|layout | string |Accepts any one of "horizontal" or "vertical" | "horizontal" | optional |
|data | array | Array of objects with keys key, color, active | [] | yes |
|onClick | function | pass click information | | optional |
|classNameWrapper| | | "consume" | |
|classNameLegendWrapper| | | "legend-wrapper" | |
|classNameLegendList| | | "legend-list"| |
|classNameLegendTick | | |"legend-tick"| |
|classNameLegendName| | | "legend-name"| |     


### For local development/demo 

For building 
```
npm run build
```
For Demo
```
npm run demo
```
go to file system and locate the react-menthol/demo/index.html

Icons used from [react-icons](https://react-icons.netlify.com/#/)