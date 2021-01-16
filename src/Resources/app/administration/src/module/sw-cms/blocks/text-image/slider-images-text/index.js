import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'slider-images-text',
    label: 'sw-cms.blocks.delightBlock.label-images',
    category: 'text-image',
    component: 'sw-cms-block-slider-images-text',
    previewComponent: 'sw-cms-preview-slider-images-text',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed'
    },
    slots: {
        imagesSliderTxt: 'images-slider-text'
    }
});

