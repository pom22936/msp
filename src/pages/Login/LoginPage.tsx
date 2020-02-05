import React, { FormEvent, useEffect, useState } from 'react';
import { Form, Input, Button, Spin, Row, Col } from 'antd';
import LoginIMG from '../../images/images/MspLogo.png'
// import { BrowserRouter as Link } from 'react-router-dom';

interface Props {
}

const LoginForm: React.FC<Props> = (props: any) => {
    const [profile, setProfile] = useState<any>(null)
    const [isLogin, setisLogin] = useState<boolean>(false)
    const [isFetchdata, setisFetchdata] = useState<boolean>(false)

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.form.validateFieldsAndScroll((err: any, value: any) => {
            login(value)
            setisFetchdata(true)
            // if (err) {
            //     console.log('in submit');
            //     login(value)
            //     setisFetchdata(true)
            // }
        })
    };

    const login = async (values: any) => {
        try {
            // let pathUser : any = {user : values}
            // console.log(pathUser);
            // store.dispatch(MyLogin(pathUser))
            
            // let test: any = localStorage.getItem('token')
            // const token: any = JSON.parse(test)

            // const response: any = await getCurrentUser(token)

            // localStorage.setItem('profile', JSON.stringify(response.data.user))

            // setProfile(response.data.user)
            // setisLogin(true)
            // setisFetchdata(false)

        } catch (error) {
            console.log(error);
            console.log(profile);
            alert('username invalid!!')
            setisLogin(false)
            setisFetchdata(false)
        }
    }

    const logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('profile')

        setProfile(null)
        setisLogin(false)
        setisFetchdata(false)
    }

    useEffect(() => {
        const profile:any = localStorage.getItem('profile')
        const profiletoken:any = JSON.parse(profile)
        if (profiletoken) {
            setProfile(profiletoken)
            setisLogin(true)
            setisFetchdata(false)
        } else {
            logout()
        }
    }, [])

    const { getFieldDecorator } = props.form;
    return (
        <>
            <Row>
                <Col span={12}>
                    <div style={{ backgroundColor: "#76A998" }}>
                        <img src={LoginIMG} alt="Login" height='753px' style={{ width: '100%', marginRight: "20%" }} />
                    </div>
                </Col>
                <Col span={12}>
                    <div>
                        {
                            isLogin ? (
                                <div>
                                    
                                </div>
                            ) : (
                                    <Spin spinning={isFetchdata}>
                                        <div className="Loginform" style={{ marginTop: '25%' }}>
                                            <Form onSubmit={handleSubmit}>
                                                <div className="row justify-content-center">
                                                    <div className="col-7">
                                                        <h5 style={{ display: 'flex', justifyContent: 'center' }} className="header-field">Login</h5>
                                                    </div>
                                                    <div className="col-7">
                                                        <div className="form-group">
                                                            <label htmlFor="email" className="header-field">Email address</label>
                                                            <Form.Item >
                                                                {getFieldDecorator('email',
                                                                    {
                                                                        rules: [{
                                                                            type: 'email',
                                                                            message: 'The input is not valid E-mail!',
                                                                        },
                                                                        {
                                                                            required: true,
                                                                            message: 'Please input your E-mail!',
                                                                        },],
                                                                    })(
                                                                        <Input type="text" placeholder="E-mail" maxLength={255} />,
                                                                    )}
                                                            </Form.Item>
                                                        </div>
                                                    </div>

                                                    <div className="col-7">
                                                        <div className="form-group">
                                                            <label htmlFor="password" className="header-field">Password</label>
                                                            <Form.Item >
                                                                {getFieldDecorator('password',
                                                                    {
                                                                        validateTrigger: ['onChange', 'onBlur'],
                                                                        rules: [{ required: true, whitespace: true, message: 'Required' }],
                                                                    })(
                                                                        <Input.Password placeholder="password" maxLength={255} />,
                                                                    )}
                                                            </Form.Item>
                                                        </div>
                                                    </div>

                                                    <div className="col-7">
                                                        <Form.Item >
                                                            <Button type="primary" htmlType="submit" block >Submit</Button>
                                                        </Form.Item>
                                                        <div style={{ marginTop: "3%", textAlign: "center" }}>
                                                            {/* <Link to="/" >Forgot Password</Link> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </Form>
                                        </div>
                                    </Spin>
                                )
                        }
                    </div>
                </Col>
            </Row>
        </>
    );
}

const LoginPage = Form.create({ name: 'Login_Page' })(LoginForm);

export default (LoginPage);