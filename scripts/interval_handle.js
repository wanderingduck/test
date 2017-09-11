/* the master interval is the interval between 2 handleInterval function executions
* specified in miliseconds
* WARNING: all other intervals must be multiples of masterInterval
*/
var masterInterval = 1000;

/*      Definition of handle class
*  it keeps 3 values:
*  Interval - the interval for the component
*  functionName - the name of the rotation function
*  counter - internaly used for calling the rotating function at the right time
*/
function handle(interval, functionName){
  this.Interval = interval;
  this.functionName = functionName;
  this.counter = interval;
}

/*     Definition of handleInterval class
*  addHandle - adds another rotating picture rotate function to handle
*  handleInterval - checks the counters of all handlers and if time then calls 
*                  the specified rotating picture function
*/
function handleInterval(){
  this.handles = new Array();
  
  this.addHandle = function addHandle(interval, functionName){
    this.handles[ this.handles.length ] = new handle( interval, functionName );
  }
  this.handleInterval = function handleInterval()
  {
    var i;
    for(i = 0 ; i < this.handles.length ; i++ )
    {
      this.handles[i].counter -= masterInterval;
      if ( this.handles[i].counter == 0 )
      {
        this.handles[i].counter = this.handles[i].Interval;
        eval(this.handles[i].functionName);
      }
    }
  }
}

hi = new handleInterval();
window.setInterval("hi.handleInterval()", masterInterval);
