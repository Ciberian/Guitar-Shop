import SiteHeader from '../../../components/page-components/site-header/site-header';
import SiteFooter from '../../../components/page-components/site-footer/site-footer';
import EditItemImage from '../../../components/form-elements/edit-item-image/edit-item-image';

function CatalogPage(): JSX.Element {
  const formDataChangeHandler = (imgFile: FileList | null) => {
    // eslint-disable-next-line no-console
    console.log(imgFile);
  };

  return (
    <>
      <SiteHeader />
      <main className='page-content'>
        <div style={{width: '390px', margin: '40px auto'}}>
          <EditItemImage imageChangeHandler={formDataChangeHandler}/>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

export default CatalogPage;
