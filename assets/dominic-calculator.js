(function(){
  var ids = [
    'domHomes','domGross','domBoots','domBonus','domMaintSpend','domMaintMarkup','domFinder',
    'domWelgoFee','domDirectFee','domResolutionRate','domUpsellBase','domUpsellScale',
    'domBaseMargin','domMarginStep','domMaxMargin','domRetention','domCacInput',
    'domLowMultiple','domHighMultiple','domAssetPerListing','domOwnership'
  ];
  var fmt = function(n){ return '$' + Math.round(n).toLocaleString(); };
  var fmtShort = function(n){
    return n >= 1000000 ? '$' + (n / 1000000).toFixed(1).replace('.0','') + 'M' :
      n >= 1000 ? '$' + (n / 1000).toFixed(1).replace('.0','') + 'K' : fmt(n);
  };
  var pct = function(n){ return Math.round(n * 100) + '%'; };
  var pct1 = function(n){ return (n * 100).toFixed(1).replace('.0','') + '%'; };
  var el = function(id){ return document.getElementById(id); };
  var set = function(id, value){ var node = el(id); if (node) node.textContent = value; };

  function val(id, fallback){
    var node = el(id);
    if (!node) return fallback;
    var parsed = +node.value;
    return Number.isFinite(parsed) ? parsed : fallback;
  }

  function calc(){
    var homes = val('domHomes', 23);
    var gross = val('domGross', 31000);
    var boots = val('domBoots', 6) / 100;
    var bonus = val('domBonus', 2) / 100;
    var spend = val('domMaintSpend', 2500);
    var markup = Math.min(val('domMaintMarkup', 15), 15) / 100;
    var finder = val('domFinder', 10) / 100;
    var welgoFee = val('domWelgoFee', 18.5) / 100;
    var directFee = val('domDirectFee', 12) / 100;
    var resolutionRate = val('domResolutionRate', 5) / 100;
    var upsellBase = val('domUpsellBase', 2) / 100;
    var upsellScale = val('domUpsellScale', 1) / 100;
    var baseMargin = val('domBaseMargin', 30) / 100;
    var marginStep = val('domMarginStep', 2) / 100;
    var maxMargin = val('domMaxMargin', 55) / 100;
    var retention = val('domRetention', 4);
    var cac = val('domCacInput', 1800);
    var lowMultiple = val('domLowMultiple', 3);
    var highMultiple = val('domHighMultiple', 5.5);
    var assetPerListing = val('domAssetPerListing', 1250);
    var ownership = val('domOwnership', 10) / 100;

    var totalGross = homes * gross;
    var tenHomeBlocks = Math.floor(homes / 10);
    var directShare = Math.min(tenHomeBlocks * 0.05, 0.70);
    var upsellRate = Math.min(upsellBase + (tenHomeBlocks * upsellScale), 0.15);
    var scaleMargin = Math.min(baseMargin + (tenHomeBlocks * marginStep), maxMargin);

    var field = totalGross * (boots + bonus);
    var maintenance = homes * spend * markup;
    var listingsShare = totalGross * finder;

    var pmRevenue = totalGross * welgoFee;
    var directRevenue = totalGross * directShare * directFee;
    var resolutionRevenue = totalGross * resolutionRate;
    var upsellRevenue = totalGross * upsellRate;
    var companyRevenue = pmRevenue + directRevenue + resolutionRevenue + upsellRevenue;
    var annualContribution = companyRevenue * scaleMargin;
    var annualContributionPerListing = homes > 0 ? annualContribution / homes : 0;
    var ltv = annualContributionPerListing * retention;
    var assetValue = homes * assetPerListing;
    var lowCompanyValue = (annualContribution * lowMultiple) + assetValue;
    var highCompanyValue = (annualContribution * highMultiple) + assetValue;

    set('domHomesVal', homes);
    set('domFieldTotal', fmt(field));
    set('domOperatorTotal', fmt(field + maintenance));
    set('domFullTotal', fmt(field + maintenance + listingsShare));
    set('domDirectShare', pct(directShare));
    set('domDirectRevenue', fmtShort(directRevenue));
    set('domResolutionRevenue', fmtShort(resolutionRevenue));
    set('domUpsellRevenue', fmtShort(upsellRevenue));
    set('domUpsellRate', pct1(upsellRate));
    set('domScaleMargin', pct1(scaleMargin));
    set('domCompanyRevenue', fmtShort(companyRevenue));
    set('domAnnualContribution', fmtShort(annualContribution));
    set('domAssetValue', fmtShort(assetValue));
    set('domLtv', fmtShort(ltv));
    set('domCac', fmtShort(cac));
    set('domLtvCac', cac > 0 ? (ltv / cac).toFixed(1).replace('.0','') + 'x' : 'n/a');
    set('domCompanyValue', fmtShort(lowCompanyValue) + ' to ' + fmtShort(highCompanyValue));
    set('domEquityValue', fmtShort(lowCompanyValue * ownership) + ' to ' + fmtShort(highCompanyValue * ownership));
    set('domOwnershipLabel', Math.round(ownership * 100) + '%');
  }

  ids.forEach(function(id){
    var node = el(id);
    if (node) node.addEventListener('input', calc);
  });
  if (el('domHomes')) calc();
})();
