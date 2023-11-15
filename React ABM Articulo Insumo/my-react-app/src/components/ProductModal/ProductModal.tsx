import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { ModalType } from '../../types/ModalType';
import { Product } from '../../types/Product';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';

type ProductModalProps = {
  show: boolean;
  onHide: () => void;
  title: string;
  modalType: ModalType;
  prod: Product;
  onDelete: (product: Product) => void;
  onSaveUpdate: (product: Product) => void;
};

const ProductModal: React.FC<ProductModalProps> = ({
  show,
  onHide,
  title,
  modalType,
  prod,
  onDelete,
  onSaveUpdate,
}: ProductModalProps) => {
  const handleSaveUpdate = async (pro: Product) => {
    try {
      const isNew = pro.id === 0;
      await onSaveUpdate(pro);
      toast.success(isNew ? 'Producto Creado' : 'Producto Actualizado', {
        position: 'top-center',
      });
      onHide();
    } catch (error) {
      console.error('Ha ocurrido un Error');
    }
  };

  const handleDelete = async () => {
    try {
      const isNew = prod.id === 0;
      await onDelete(prod);
      toast.success(isNew ? 'Producto creado' : 'Producto eliminado', {
        position: 'top-center',
      });
      onHide();
    } catch (error) {
      console.error('Ha ocurrido un Error');
    }
  };

  const validationSchema = Yup.object().shape({
    id: Yup.number().integer().min(0),
    title: Yup.string().required('El título es requerido'),
    price: Yup.number().min(0).required('El precio es requerido'),
    description: Yup.string().required('La descripción es requerida'),
    category: Yup.string().required('La categoría es requerida'),
    //image: Yup.string().required('La URL de la imagen es requerida'),
  });

  const formik = useFormik({
    initialValues: prod,
    validationSchema: validationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (obj: Product) => handleSaveUpdate(obj),
  });

  return (
    <>
      {modalType === ModalType.DELETE ? (
        <Modal show={show} onHide={onHide} centered backdrop="static">
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              ¿Está seguro que desea eliminar el Producto?
              <br /> <strong>{prod.denominacion}</strong>?
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={onHide}>
              Cancelar
            </Button>
            <Button variant="danger" onClick={handleDelete}>
              Borrar
            </Button>
          </Modal.Footer>
        </Modal>
      ) : (
        <Modal show={show} onHide={onHide} centered backdrop="static">
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={formik.handleSubmit}>
              <Form.Group controlId="formTitle">
                <Form.Label>Denominacion</Form.Label>
                <Form.Control
                  name="title"
                  type="text"
                  value={formik.values.denominacion}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={Boolean(formik.errors.denominacion && formik.touched.denominacion)}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.denominacion}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formPrice">
                <Form.Label>Stock Actual</Form.Label>
                <Form.Control
                  name="price"
                  type="number"
                  value={formik.values.stockActual}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={Boolean(formik.errors.stockActual && formik.touched.stockActual)}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.stockActual}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formDescription">
                <Form.Label>Url Imagen</Form.Label>
                <Form.Control
                  name="description"
                  as="textarea"
                  value={formik.values.urlImagen}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={Boolean(formik.errors.urlImagen && formik.touched.urlImagen)}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.urlImagen}
                </Form.Control.Feedback>
              </Form.Group>
            
              <Modal.Footer className="mt-4">
                <Button variant="secondary" onClick={onHide}>
                  Cancelar
                </Button>
                <Button variant="primary" type="submit" disabled={!formik.isValid}>
                  Guardar
                </Button>
              </Modal.Footer>
            </form>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};

export default ProductModal;