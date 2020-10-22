
export class CounterService
{
activeToInactive=0;
Inactivetoactive=0;

incrementActivetoInactive()
{
  this.activeToInactive++;
  console.log(this.activeToInactive);

}
incrementInactivetoActive()
{
this.Inactivetoactive++;
console.log(this.Inactivetoactive);
}
}
