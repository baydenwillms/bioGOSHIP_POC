export interface CruiseExpedition {
  expocode: string;
  lines: string;
  ship: string;
  country: string;
  startDate: string;
  endDate: string;
  pi: string;
  cchdo?: string;
  ncei?: string;
  bcoDmo?: string;
  seabass?: string;
  ncbi?: string;
  obis?: string;
  ode?: string;
}

export const cruiseExpeditions: CruiseExpedition[] = [
  { expocode: "33H320260511", lines: "P04E, P04C", ship: "R/V Marcus G. Langseth", country: "US", startDate: "2026-05-11", endDate: "2026-07-05", pi: "Andrew Babbin", cchdo: "https://cchdo.ucsd.edu/cruise/33H320260511" },
  { expocode: "06M320260113", lines: "MED-01", ship: "R/V Meteor", country: "DE", startDate: "2026-01-13", endDate: "2026-02-09", pi: "Toste Tanhua", cchdo: "https://cchdo.ucsd.edu/cruise/06M320260113" },
  { expocode: "49NZ20250405", lines: "P04W", ship: "R/V Mirai", country: "JP", startDate: "2025-04-05", endDate: "2025-05-12", pi: "Shinya Kouketsu", cchdo: "https://cchdo.ucsd.edu/cruise/49NZ20250405" },
  { expocode: "325020250321", lines: "I09N", ship: "R/V Thomas G. Thompson", country: "US", startDate: "2025-03-21", endDate: "2025-04-27", pi: "Viviane Menezes", cchdo: "https://cchdo.ucsd.edu/cruise/325020250321" },
  { expocode: "325020240221", lines: "I08S", ship: "R/V Thomas G. Thompson", country: "US", startDate: "2024-02-21", endDate: "2024-04-01", pi: "Sebastien Bigorre", cchdo: "https://cchdo.ucsd.edu/cruise/325020240221" },
  { expocode: "33H320240201", lines: "A13.5", ship: "R/V Marcus G. Langseth", country: "US", startDate: "2024-02-01", endDate: "2024-03-23", pi: "Zachary Erickson", cchdo: "https://cchdo.ucsd.edu/cruise/33H320240201" },
  { expocode: "49NZ20231006", lines: "P14N", ship: "R/V Mirai", country: "JP", startDate: "2023-10-06", endDate: "2023-11-09", pi: "Katsuro Katsumata", cchdo: "https://cchdo.ucsd.edu/cruise/49NZ20231006" },
  { expocode: "33RR20230722", lines: "I05", ship: "R/V Roger Revelle", country: "US", startDate: "2023-07-22", endDate: "2023-09-14", pi: "Brendan Carter", cchdo: "https://cchdo.ucsd.edu/cruise/33RR20230722" },
  { expocode: "33RO20230413", lines: "A16N", ship: "NOAA Ship Ronald H. Brown", country: "US", startDate: "2023-04-13", endDate: "2023-05-09", pi: "Leticia Barbero", cchdo: "https://cchdo.ucsd.edu/cruise/33RO20230413" },
  { expocode: "33RO20230306", lines: "A16N", ship: "NOAA Ship Ronald H. Brown", country: "US", startDate: "2023-03-06", endDate: "2023-04-07", pi: "Zachary Erickson", cchdo: "https://cchdo.ucsd.edu/cruise/33RO20230306" },
  { expocode: "49UP20220727", lines: "P09", ship: "R/V Ryofu Maru", country: "JP", startDate: "2022-07-27", endDate: "2022-11-02", pi: "NAGAI Naoki", cchdo: "https://cchdo.ucsd.edu/cruise/49UP20220727" },
  { expocode: "33RR20220613", lines: "P02, P02E", ship: "R/V Roger Revelle", country: "US", startDate: "2022-06-13", endDate: "2022-07-16", pi: "Andreas Thurnherr", cchdo: "https://cchdo.ucsd.edu/cruise/33RR20220613" },
  { expocode: "58JH20220524", lines: "A29, 75N", ship: "R/V Johan Hjort", country: "NO", startDate: "2022-05-24", endDate: "2022-06-20", pi: "Henrik Søiland", cchdo: "https://cchdo.ucsd.edu/cruise/58JH20220524" },
  { expocode: "11BG20220517", lines: "", ship: "R/V Belgica", country: "IT", startDate: "2022-05-17", endDate: "2022-05-26", pi: "Katrin Schroeder", cchdo: "https://cchdo.ucsd.edu/cruise/11BG20220517" },
  { expocode: "33RR20220430", lines: "P02, P02W", ship: "R/V Roger Revelle", country: "US", startDate: "2022-04-30", endDate: "2022-06-10", pi: "Alison Macdonald", cchdo: "https://cchdo.ucsd.edu/cruise/33RR20220430" },
  { expocode: "49UP20210719", lines: "P03W", ship: "R/V Ryofu Maru", country: "JP", startDate: "2021-07-19", endDate: "2021-10-14", pi: "NAGAI Naoki", cchdo: "https://cchdo.ucsd.edu/cruise/49UP20210719" },
  { expocode: "49NZ20210713", lines: "P01", ship: "R/V Mirai", country: "JP", startDate: "2021-07-13", endDate: "2021-08-26", pi: "Shinya Kouketsu", cchdo: "https://cchdo.ucsd.edu/cruise/49NZ20210713" },
  { expocode: "325020210420", lines: "A22", ship: "R/V Thomas G. Thompson", country: "US", startDate: "2021-04-20", endDate: "2021-05-16", pi: "Viviane Menezes", cchdo: "https://cchdo.ucsd.edu/cruise/325020210420" },
  { expocode: "325020210316", lines: "A20", ship: "R/V Thomas G. Thompson", country: "US", startDate: "2021-03-16", endDate: "2021-04-16", pi: "Ryan Woosley", cchdo: "https://cchdo.ucsd.edu/cruise/325020210316" },
  { expocode: "33RO20200321", lines: "A12, A13.5", ship: "NOAA Ship Ronald H. Brown", country: "US", startDate: "2020-03-21", endDate: "2020-04-17", pi: "Leticia Barbero", cchdo: "https://cchdo.ucsd.edu/cruise/33RO20200321", seabass: "https://seabass.gsfc.nasa.gov/cruise/A13_5_20" },
  { expocode: "74EQ20200203", lines: "A23, SR1B", ship: "RRS Discovery", country: "GB", startDate: "2020-02-03", endDate: "2020-03-13", pi: "Yvonne Firing", cchdo: "https://cchdo.ucsd.edu/cruise/74EQ20200203" },
  { expocode: "740H20200119", lines: "A05", ship: "RRS James Cook", country: "GB", startDate: "2020-01-19", endDate: "2020-03-01", pi: "A Sanchez-Franks", cchdo: "https://cchdo.ucsd.edu/cruise/740H20200119" },
  { expocode: "49NZ20191229", lines: "I07, I07C, I07S, S04I", ship: "R/V Mirai", country: "JP", startDate: "2019-12-29", endDate: "2020-02-10", pi: "Katsuro Katsumata", cchdo: "https://cchdo.ucsd.edu/cruise/49NZ20191229" },
  { expocode: "49NZ20191205", lines: "I08N", ship: "R/V Mirai", country: "JP", startDate: "2019-12-05", endDate: "2019-12-27", pi: "Akihiko Murata", cchdo: "https://cchdo.ucsd.edu/cruise/49NZ20191205" },
  { expocode: "49UP20190612", lines: "40N", ship: "R/V Ryofu Maru", country: "JP", startDate: "2019-06-12", endDate: "2019-08-03", pi: "Shinji Masuda", cchdo: "https://cchdo.ucsd.edu/cruise/49UP20190612" },
  { expocode: "58JH20190515", lines: "A29, 75N", ship: "R/V Johan Hjort", country: "NO", startDate: "2019-05-15", endDate: "2019-06-04", pi: "Henrik Søiland", cchdo: "https://cchdo.ucsd.edu/cruise/58JH20190515" },
  { expocode: "29HE20190406", lines: "A17", ship: "BIO Hesperides", country: "ES", startDate: "2019-04-05", endDate: "2019-05-19", pi: "Miguel Gil Coto", cchdo: "https://cchdo.ucsd.edu/cruise/29HE20190406" },
  { expocode: "325020190403", lines: "I06S", ship: "R/V Thomas G. Thompson", country: "US", startDate: "2019-04-03", endDate: "2019-05-14", pi: "Alejandro Orsi", cchdo: "https://cchdo.ucsd.edu/cruise/325020190403" },
  { expocode: "74JC20181103", lines: "SR01B", ship: "RRS James Clark Ross", country: "GB", startDate: "2018-11-03", endDate: "2018-11-22", pi: "Yvonne L. Firing", cchdo: "https://cchdo.ucsd.edu/cruise/74JC20181103" },
  { expocode: "35HT20180611", lines: "A25", ship: "R/V Thalassa", country: "FR", startDate: "2018-06-11", endDate: "2018-07-14", pi: "Pascale Lherminier", cchdo: "https://cchdo.ucsd.edu/cruise/35HT20180611" },
  { expocode: "33RO20180423", lines: "I07N", ship: "NOAA Ship Ronald H. Brown", country: "US", startDate: "2018-04-23", endDate: "2018-06-06", pi: "Denis L. Volkov", cchdo: "https://cchdo.ucsd.edu/cruise/33RO20180423", bcoDmo: "https://doi.org/10.26008/1912/bco-dmo.853101.1" },
  { expocode: "320620180309", lines: "S04P", ship: "R/V Nathaniel B. Palmer", country: "US", startDate: "2018-03-09", endDate: "2018-05-14", pi: "Alison Macdonald", cchdo: "https://cchdo.ucsd.edu/cruise/320620180309" },
  { expocode: "06M220180302", lines: "", ship: "R/V Maria S. Merian", country: "DE", startDate: "2018-03-02", endDate: "2018-04-03", pi: "Dagmar Hainbucher", cchdo: "https://cchdo.ucsd.edu/cruise/06M220180302" },
  { expocode: "096U20180111", lines: "S04, SR03, SR3, P11S", ship: "R/V Investigator", country: "AU", startDate: "2018-01-11", endDate: "2018-02-22", pi: "Steve Rintoul", cchdo: "https://cchdo.ucsd.edu/cruise/096U20180111" },
  { expocode: "74JC20171121", lines: "SR1B", ship: "RRS James Clark Ross", country: "GB", startDate: "2017-11-21", endDate: "2017-12-21", pi: "D. Barnes", cchdo: "https://cchdo.ucsd.edu/cruise/74JC20171121" },
  { expocode: "320620170820", lines: "P06, P06E", ship: "R/V Nathaniel B. Palmer", country: "US", startDate: "2017-08-20", endDate: "2017-09-30", pi: "Kevin Speer", cchdo: "https://cchdo.ucsd.edu/cruise/320620170820" },
  { expocode: "320620170703", lines: "P06, P06W", ship: "R/V Nathaniel B. Palmer", country: "US", startDate: "2017-07-03", endDate: "2017-08-17", pi: "Sabine Mecking", cchdo: "https://cchdo.ucsd.edu/cruise/320620170703" },
  { expocode: "45CE20170427", lines: "A02", ship: "R/V Celtic Explorer", country: "IE", startDate: "2017-04-27", endDate: "2017-05-23", pi: "Peter Croot", cchdo: "https://cchdo.ucsd.edu/cruise/45CE20170427" },
  { expocode: "49NZ20170208", lines: "P17E, P17", ship: "R/V Mirai", country: "JP", startDate: "2017-02-08", endDate: "2017-03-05", pi: "Hiroshi Uchida", cchdo: "https://cchdo.ucsd.edu/cruise/49NZ20170208" },
  { expocode: "06AQ20161216", lines: "A12, SR04", ship: "R/V Polarstern", country: "DE", startDate: "2016-12-16", endDate: "2017-02-02", pi: "Olaf Boebel", cchdo: "https://cchdo.ucsd.edu/cruise/06AQ20161216" },
  { expocode: "33RO20161119", lines: "P18", ship: "NOAA Ship Ronald H. Brown", country: "US", startDate: "2016-11-19", endDate: "2017-02-03", pi: "Rolf Sonnerup", cchdo: "https://cchdo.ucsd.edu/cruise/33RO20161119", bcoDmo: "https://doi.org/10.26008/1912/bco-dmo.853101.1" },
  { expocode: "29AJ20160818", lines: "", ship: "B/O Angeles Alvarino", country: "FR", startDate: "2016-08-18", endDate: "2016-08-29", pi: "Loïc Jullion", cchdo: "https://cchdo.ucsd.edu/cruise/29AJ20160818" },
  { expocode: "49UP20160703", lines: "P09", ship: "R/V Ryofu Maru", country: "JP", startDate: "2016-07-03", endDate: "2016-08-24", pi: "Naoki NAGAI", cchdo: "https://cchdo.ucsd.edu/cruise/49UP20160703" },
  { expocode: "29AH20160617", lines: "A25", ship: "B/O Sarmiento de Gamboa", country: "ES", startDate: "2016-06-17", endDate: "2016-07-31", pi: "Fiz Fernández Pérez", cchdo: "https://cchdo.ucsd.edu/cruise/29AH20160617" },
  { expocode: "06SN20160501", lines: "P14N", ship: "R/V Sonne", country: "DE", startDate: "2016-05-01", endDate: "2016-06-03", pi: "Meinhard Simon", cchdo: "https://cchdo.ucsd.edu/cruise/06SN20160501" },
  { expocode: "096U20160426", lines: "P15S", ship: "R/V Investigator", country: "AU", startDate: "2016-04-26", endDate: "2016-06-22", pi: "", cchdo: "https://cchdo.ucsd.edu/cruise/096U20160426" },
  { expocode: "33RR20160321", lines: "I09N", ship: "R/V Roger Revelle", country: "US", startDate: "2016-03-21", endDate: "2016-04-28", pi: "Leticia Barbero", cchdo: "https://cchdo.ucsd.edu/cruise/33RR20160321" },
  { expocode: "33RR20160208", lines: "I08S", ship: "R/V Roger Revelle", country: "US", startDate: "2016-02-08", endDate: "2016-03-16", pi: "Alison Macdonald", cchdo: "https://cchdo.ucsd.edu/cruise/33RR20160208" },
  { expocode: "49NZ20160113", lines: "", ship: "R/V Mirai", country: "JP", startDate: "2016-01-13", endDate: "2016-01-25", pi: "Akihiko Murata", cchdo: "https://cchdo.ucsd.edu/cruise/49NZ20160113" },
  { expocode: "49NZ20151223", lines: "I10", ship: "R/V Mirai", country: "JP", startDate: "2015-12-23", endDate: "2016-01-11", pi: "Katsuro Katsumata", cchdo: "https://cchdo.ucsd.edu/cruise/49NZ20151223" },
  { expocode: "74EQ20151206", lines: "A05", ship: "RRS Discovery", country: "GB", startDate: "2015-12-06", endDate: "2016-01-22", pi: "King, Brian", cchdo: "https://cchdo.ucsd.edu/cruise/74EQ20151206" },
  { expocode: "33HQ20150809", lines: "ARC01", ship: "USCGC Healy", country: "US", startDate: "2015-08-09", endDate: "2015-10-12", pi: "David Kadko", cchdo: "https://cchdo.ucsd.edu/cruise/33HQ20150809" },
  { expocode: "49UP20150724", lines: "P04W", ship: "R/V Ryofu Maru", country: "JP", startDate: "2015-07-24", endDate: "2015-09-15", pi: "Keizo SHUTTA", cchdo: "https://cchdo.ucsd.edu/cruise/49UP20150724" },
  { expocode: "33RO20150525", lines: "P16N, P16", ship: "NOAA Ship Ronald H. Brown", country: "US", startDate: "2015-05-25", endDate: "2015-06-25", pi: "Alison Macdonald", cchdo: "https://cchdo.ucsd.edu/cruise/33RO20150525", ncei: "https://www.ncei.noaa.gov/access/ocean-carbon-acidification-data-system/oceans/RepeatSections/clivar_p16n.html", bcoDmo: "https://doi.org/10.26008/1912/bco-dmo.853101.1" },
  { expocode: "33RO20150410", lines: "P16C, P16N, P16", ship: "NOAA Ship Ronald H. Brown", country: "US", startDate: "2015-04-10", endDate: "2015-05-13", pi: "Jessica Cross", cchdo: "https://cchdo.ucsd.edu/cruise/33RO20150410", ncei: "https://www.ncei.noaa.gov/access/ocean-carbon-acidification-data-system/oceans/RepeatSections/clivar_p16n.html", bcoDmo: "https://doi.org/10.26008/1912/bco-dmo.853101.1" },
  { expocode: "49NZ20140717", lines: "P10N, P01", ship: "R/V Mirai", country: "JP", startDate: "2014-07-17", endDate: "2014-08-29", pi: "Hiroshi Uchida", cchdo: "https://cchdo.ucsd.edu/cruise/49NZ20140717" },
  { expocode: "49NZ20140709", lines: "P10N, P01", ship: "R/V Mirai", country: "JP", startDate: "2014-07-09", endDate: "2014-07-15", pi: "Hiroshi Uchida", cchdo: "https://cchdo.ucsd.edu/cruise/49NZ20140709" },
  { expocode: "49UP20140609", lines: "P10", ship: "R/V Ryofu Maru", country: "JP", startDate: "2014-06-09", endDate: "2014-09-16", pi: "Kazuhiro NEMOTO", cchdo: "https://cchdo.ucsd.edu/cruise/49UP20140609" },
  { expocode: "74JC20140606", lines: "AR07, AR07E, AR07W, AR28", ship: "RRS James Clark Ross", country: "GB", startDate: "2014-06-06", endDate: "2014-07-21", pi: "Brian A. King", cchdo: "https://cchdo.ucsd.edu/cruise/74JC20140606" },
  { expocode: "35PK20140515", lines: "A01W, A25, OVIDE", ship: "R/V Pourquoi Pas", country: "FR", startDate: "2014-05-15", endDate: "2014-06-30", pi: "G. Sarthou", cchdo: "https://cchdo.ucsd.edu/cruise/35PK20140515" },
  { expocode: "320620140320", lines: "P16, P16S", ship: "R/V Nathaniel B. Palmer", country: "US", startDate: "2014-03-20", endDate: "2014-05-05", pi: "Lynne Talley", cchdo: "https://cchdo.ucsd.edu/cruise/320620140320" },
  { expocode: "33RO20131223", lines: "A16S, A23", ship: "NOAA Ship Ronald H. Brown", country: "US", startDate: "2013-12-23", endDate: "2014-02-04", pi: "Rik Wanninkhof", cchdo: "https://cchdo.ucsd.edu/cruise/33RO20131223" },
  { expocode: "33RO20130803", lines: "A16N", ship: "NOAA Ship Ronald H. Brown", country: "US", startDate: "2013-08-03", endDate: "2013-10-03", pi: "John L. Bullister", cchdo: "https://cchdo.ucsd.edu/cruise/33RO20130803" },
  { expocode: "49UP20130619", lines: "P03W", ship: "R/V Ryofu Maru", country: "JP", startDate: "2013-06-24", endDate: "2013-09-18", pi: "Kazuhiro NEMOTO", cchdo: "https://cchdo.ucsd.edu/cruise/49UP20130619" },
  { expocode: "318M20130321", lines: "P02, P02E", ship: "R/V Melville", country: "US", startDate: "2013-03-21", endDate: "2013-06-01", pi: "James Swift", cchdo: "https://cchdo.ucsd.edu/cruise/318M20130321" },
  { expocode: "29HE20130320", lines: "A17", ship: "BIO Hesperides", country: "ES", startDate: "2013-03-20", endDate: "2013-05-22", pi: "Aida Rios", cchdo: "https://cchdo.ucsd.edu/cruise/29HE20130320" },
  { expocode: "49NZ20130106", lines: "S04, S04I", ship: "R/V Mirai", country: "JP", startDate: "2013-01-06", endDate: "2013-02-15", pi: "", cchdo: "https://cchdo.ucsd.edu/cruise/49NZ20130106" },
];
