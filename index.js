function findMatching(drivers, string) {
    return drivers.filter
      (drivers => drivers.toLowerCase() === string.toLowerCase()
    );
  }

  function fuzzyMatch(drivers, string) {
    return drivers.filter(
        drivers => drivers.toLowerCase().indexOf(string.toLowerCase()) === 0 
    );
  }

  function matchName(driver, string) {
    return driver.filter(driver => driver.name === string);
  }