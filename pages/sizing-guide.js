import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Facility from '../components/Common/Facility';
import Breadcrumb from '../components/Common/Breadcrumb';

class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Breadcrumb title="Sizing Guide" />
                <section className="sizing-guide-area ptb-60">
                    <div className="container">
                        <div className="section-title">
                            <h2><span className="dot"></span> Size Guide</h2>
                        </div>

                        <div className="sizing-guide-table">
                            <h3>Women's apparel sizing</h3>

                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>International</th>
                                            <th>XS</th>
                                            <th>S</th>
                                            <th>M</th>
                                            <th>L</th>
                                            <th>XL</th>
                                            <th>XLL</th>
                                            <th>XLLL</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td>Europe</td>
                                            <td>31</td>
                                            <td>33</td>
                                            <td>35</td>
                                            <td>38</td>
                                            <td>40</td>
                                            <td>42</td>
                                            <td>44</td>
                                        </tr>

                                        <tr>
                                            <td>USA</td>
                                            <td>0</td>
                                            <td>2</td>
                                            <td>4</td>
                                            <td>6</td>
                                            <td>8</td>
                                            <td>10</td>
                                            <td>12</td>
                                        </tr>

                                        <tr>
                                            <td>Chest Fit (Inches)</td>
                                            <td>28"</td>
                                            <td>30"</td>
                                            <td>32"</td>
                                            <td>34"</td>
                                            <td>36"</td>
                                            <td>38"</td>
                                            <td>40"</td>
                                        </tr>

                                        <tr>
                                            <td>Chest Fit (Cm)</td>
                                            <td>71</td>
                                            <td>76</td>
                                            <td>81</td>
                                            <td>86</td>
                                            <td>91.5</td>
                                            <td>96.5</td>
                                            <td>101.1</td>
                                        </tr>

                                        <tr>
                                            <td>Waist Fir (Inches)</td>
                                            <td>28"</td>
                                            <td>30"</td>
                                            <td>32"</td>
                                            <td>34"</td>
                                            <td>36"</td>
                                            <td>38"</td>
                                            <td>40"</td>
                                        </tr>

                                        <tr>
                                            <td>Waist Fir (Cm)</td>
                                            <td>71</td>
                                            <td>76</td>
                                            <td>81</td>
                                            <td>86</td>
                                            <td>91.5</td>
                                            <td>96.5</td>
                                            <td>101.1</td>
                                        </tr>

                                        <tr>
                                            <td>Hips Fir (Inches)</td>
                                            <td>28"</td>
                                            <td>30"</td>
                                            <td>32"</td>
                                            <td>34"</td>
                                            <td>36"</td>
                                            <td>38"</td>
                                            <td>40"</td>
                                        </tr>

                                        <tr>
                                            <td>Hips Fir (Cm)</td>
                                            <td>71</td>
                                            <td>76</td>
                                            <td>81</td>
                                            <td>86</td>
                                            <td>91.5</td>
                                            <td>96.5</td>
                                            <td>101.1</td>
                                        </tr>

                                        <tr>
                                            <td>Skort Lengths (Cm)</td>
                                            <td>28"</td>
                                            <td>30"</td>
                                            <td>32"</td>
                                            <td>34"</td>
                                            <td>36"</td>
                                            <td>38"</td>
                                            <td>40"</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="sizing-guide-table">
                            <h3>Men's apparel sizing</h3>

                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>International</th>
                                            <th>XS</th>
                                            <th>S</th>
                                            <th>M</th>
                                            <th>L</th>
                                            <th>XL</th>
                                            <th>XLL</th>
                                            <th>XLLL</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td>Europe</td>
                                            <td>31</td>
                                            <td>33</td>
                                            <td>35</td>
                                            <td>38</td>
                                            <td>40</td>
                                            <td>42</td>
                                            <td>44</td>
                                        </tr>

                                        <tr>
                                            <td>USA</td>
                                            <td>0</td>
                                            <td>2</td>
                                            <td>4</td>
                                            <td>6</td>
                                            <td>8</td>
                                            <td>10</td>
                                            <td>12</td>
                                        </tr>

                                        <tr>
                                            <td>Chest Fit (Inches)</td>
                                            <td>28"</td>
                                            <td>30"</td>
                                            <td>32"</td>
                                            <td>34"</td>
                                            <td>36"</td>
                                            <td>38"</td>
                                            <td>40"</td>
                                        </tr>

                                        <tr>
                                            <td>Chest Fit (Cm)</td>
                                            <td>71</td>
                                            <td>76</td>
                                            <td>81</td>
                                            <td>86</td>
                                            <td>91.5</td>
                                            <td>96.5</td>
                                            <td>101.1</td>
                                        </tr>

                                        <tr>
                                            <td>Waist Fir (Inches)</td>
                                            <td>28"</td>
                                            <td>30"</td>
                                            <td>32"</td>
                                            <td>34"</td>
                                            <td>36"</td>
                                            <td>38"</td>
                                            <td>40"</td>
                                        </tr>

                                        <tr>
                                            <td>Waist Fir (Cm)</td>
                                            <td>71</td>
                                            <td>76</td>
                                            <td>81</td>
                                            <td>86</td>
                                            <td>91.5</td>
                                            <td>96.5</td>
                                            <td>101.1</td>
                                        </tr>

                                        <tr>
                                            <td>Hips Fir (Inches)</td>
                                            <td>28"</td>
                                            <td>30"</td>
                                            <td>32"</td>
                                            <td>34"</td>
                                            <td>36"</td>
                                            <td>38"</td>
                                            <td>40"</td>
                                        </tr>

                                        <tr>
                                            <td>Hips Fir (Cm)</td>
                                            <td>71</td>
                                            <td>76</td>
                                            <td>81</td>
                                            <td>86</td>
                                            <td>91.5</td>
                                            <td>96.5</td>
                                            <td>101.1</td>
                                        </tr>

                                        <tr>
                                            <td>Skort Lengths (Cm)</td>
                                            <td>28"</td>
                                            <td>30"</td>
                                            <td>32"</td>
                                            <td>34"</td>
                                            <td>36"</td>
                                            <td>38"</td>
                                            <td>40"</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <ul className="sizing-guide-info">
                                <li><span>Chest:</span> Around the fullest part of the neck, at the base.</li>
                                <li><span>Waist:</span> Around the narrowest part of the waist.</li>
                                <li><span>Hips:</span> Around the widest point of the hips.</li>
                                <li><span>Skort Lengths:</span> From the crotch to the anklebone on the inside of the leg.</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <Facility />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Index;
