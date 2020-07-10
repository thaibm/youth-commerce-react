import React, { Component } from 'react';

class SizeGuide extends Component {
    render() {
        const { closeSizeGuide } = this.props;
        return (
            <div 
                className="modal fade sizeGuideModal show" style={{paddingRight: '16px', display: 'block'}}
            >
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <button type="button" onClick={closeSizeGuide} className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">
                                <i className="fas fa-times"></i>
                            </span>
                        </button>

                        <div className="modal-sizeguide">
                            <h3>Size Guide</h3>
                            <p>This is an approximate conversion table to help you find your size.</p>

                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Italian</th>
                                            <th>Spanish</th>
                                            <th>German</th>
                                            <th>UK</th>
                                            <th>US</th>
                                            <th>Japanese</th>
                                            <th>Chinese</th>
                                            <th>Russian</th>
                                            <th>Korean</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td>34</td>
                                            <td>30</td>
                                            <td>28</td>
                                            <td>4</td>
                                            <td>00</td>
                                            <td>3</td>
                                            <td>155/75A</td>
                                            <td>36</td>
                                            <td>44</td>
                                        </tr>
                                        <tr>
                                            <td>36</td>
                                            <td>32</td>
                                            <td>30</td>
                                            <td>6</td>
                                            <td>0</td>
                                            <td>5</td>
                                            <td>155/80A</td>
                                            <td>38</td>
                                            <td>44</td>
                                        </tr>
                                        <tr>
                                            <td>38</td>
                                            <td>34</td>
                                            <td>32</td>
                                            <td>8</td>
                                            <td>2</td>
                                            <td>7</td>
                                            <td>160/84A</td>
                                            <td>40</td>
                                            <td>55</td>
                                        </tr>
                                        <tr>
                                            <td>40</td>
                                            <td>36</td>
                                            <td>34</td>
                                            <td>10</td>
                                            <td>4</td>
                                            <td>9</td>
                                            <td>165/88A</td>
                                            <td>42</td>
                                            <td>55</td>
                                        </tr>
                                        <tr>
                                            <td>42</td>
                                            <td>38</td>
                                            <td>36</td>
                                            <td>12</td>
                                            <td>6</td>
                                            <td>11</td>
                                            <td>170/92A</td>
                                            <td>44</td>
                                            <td>66</td>
                                        </tr>
                                        <tr>
                                            <td>44</td>
                                            <td>40</td>
                                            <td>38</td>
                                            <td>14</td>
                                            <td>8</td>
                                            <td>13</td>
                                            <td>175/96A</td>
                                            <td>46</td>
                                            <td>66</td>
                                        </tr>
                                        <tr>
                                            <td>46</td>
                                            <td>42</td>
                                            <td>40</td>
                                            <td>16</td>
                                            <td>10</td>
                                            <td>15</td>
                                            <td>170/98A</td>
                                            <td>48</td>
                                            <td>77</td>
                                        </tr>
                                        <tr>
                                            <td>48</td>
                                            <td>44</td>
                                            <td>42</td>
                                            <td>18</td>
                                            <td>12</td>
                                            <td>17</td>
                                            <td>170/100B</td>
                                            <td>50</td>
                                            <td>77</td>
                                        </tr>
                                        <tr>
                                            <td>50</td>
                                            <td>46</td>
                                            <td>44</td>
                                            <td>20</td>
                                            <td>14</td>
                                            <td>19</td>
                                            <td>175/100B</td>
                                            <td>52</td>
                                            <td>88</td>
                                        </tr>
                                        <tr>
                                            <td>52</td>
                                            <td>48</td>
                                            <td>46</td>
                                            <td>22</td>
                                            <td>16</td>
                                            <td>21</td>
                                            <td>180/104B</td>
                                            <td>54</td>
                                            <td>88</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SizeGuide;
