var library = (function() { 
  return {
	TimeStamp: (function(){
   	  return {
		UnixTimestamp: function(){
            
        },
		UnixMillisecond: function(){}
	  }
	})(),
	Local: (function(){
	  return {
		Time: (function() {
		  return {
	  	    WithSeconds: function(){},
	   	    WithOutSeconds: function() {}
		  }
		})(),
		MDY: (function(){
	  	  return {
		    Numeral: function(){},
			Name: function(){}
		  }
		  })(),
		}
	})(),
	Second: (function(){
		return{
			Second: function(){},
			DblDigit: function(){}
		}
	})(),
	Minute: (function(){
		return{
			Minute: function(){},
			DblDigit: function(){}
		}
	})(),
	Hour: (function(){
		return {
			TwentyFourHour: function() {},
			TwelveHour: function() {},
			AMPM: (function() {
				return {
					UpperCase: function(){},
					LowerCase: function(){}
				}
			})()
		}
	})(),
	Week: (function(){
		return {
			DayOfWeek: function(){},
			AbrDayOfWeek: function(){},
			FirstTwoOfWeek: function(){},
			WeekOfYear: function(){}
		}
	})(),
	Month: (function(){ 
		return  {
			DateOfMonth: (function(){ 
                return {
					Numeral: function(){
                        return ((new Date()).getDate()).toString();
                    },
					Ordinal: function(){
                        return ;
                    },
					DateDblDigit: function(){}
				}
			})(),
			MonthNumber: function(){
                var date = new Date();
                return (date.getMonth()+ 1).toString();    
            },
			MonthNumberDblDigit: function(){            
            var date = new Date();
                return ('0'+(date.getMonth()+1)).slice(-2);
            },
			
            AbrOfCurrentMonth: function(){
               
               var date = new Date();
               var month=new Array(12);
                        month[0]="Jan";
                        month[1]="Feb";
                        month[2]="Mar";
                        month[3]="Apr";
                        month[4]="May";
                        month[5]="June";
                        month[6]="Jul";
                        month[7]="August";
                        month[8]="September";
                        month[9]="October";
                        month[10]="November";
                        month[11]="December";

                        console.log([date.getMonth()]).toString();
            },
                                    
             
            
			CurrentMonth: function(){}
		    }
	})(),
	Year: (function(){
		return {
			DayOfYear: (function(){
				return { 
					Numeral: function(){},
					Ordinal: function(){}
				}
			})(),
			YearFull: function(){},
			YearAbr: function(){}
		}
	})(),
	Defaults: function(){}
  }
})();