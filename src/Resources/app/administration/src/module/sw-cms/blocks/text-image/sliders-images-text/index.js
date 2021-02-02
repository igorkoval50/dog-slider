import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'sliders-images-text',
    label: 'sw-cms.blocks.delightBlock.labels',
    category: 'text-image',
    component: 'sw-cms-block-sliders-images-text',
    previewComponent: 'sw-cms-preview-sliders-images-text',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed'
    },
    slots: {
        imageSlidersTxt: 'images-sliders-text'
    }
});

