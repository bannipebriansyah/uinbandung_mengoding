import React from 'react';

import Jumbo from './Jumbo';
import KajianKoding from  './KajianKoding';
import SantrenKilat from  './SantrenKilat';
import Kegiatan from  './Kegiatan';
import Mondok from  './Mondok';
import Sponsor from  './Sponsor';
import Kontak from  './Kontak';

const Home = () => (
  <div>  
  	<body className="bg-light">
  		<Jumbo />
	    <KajianKoding />
	    <SantrenKilat />
	    <Kegiatan />
	    <Mondok />
	    <Sponsor />
	    <Kontak />
  	</body> 	    
  </div>
)

export default Home;