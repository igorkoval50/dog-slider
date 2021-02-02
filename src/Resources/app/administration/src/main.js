import './module/sw-cms/blocks/image/slider-image-text';
import './module/sw-cms/elements/image-slider-text';

import './module/sw-cms/blocks/text-image/slider-images-text';
import './module/sw-cms/elements/images-slider-text';

import './module/sw-cms/blocks/text-image/sliders-images-text';
import './module/sw-cms/elements/images-sliders-text';

import deDE from './module/sw-cms/snippet/de-DE.json';
import enGB from './module/sw-cms/snippet/en-GB.json';

Shopware.Locale.extend('de-DE', deDE);
Shopware.Locale.extend('en-GB', enGB);
