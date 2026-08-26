CarSense Frontend — Architecture & Workflow Documentation

1. Overview

CarSense is a Next.js-based frontend for an AI-powered used-car price prediction application.

The frontend provides three primary user-facing areas:

- Home — introduces the CarSense product and its capabilities.
- Predict — collects vehicle information, sends it to the backend prediction API, and displays model predictions and analytics.
- Compare — allows users to compare the performance of multiple machine-learning regression models.
- About — explains the purpose, capabilities, machine-learning models, and methodology of CarSense.

The frontend communicates with a separate backend through HTTP API requests. The backend URL is configured using the "NEXT_PUBLIC_API_URL" environment variable.

---

2. Technology Stack

The current frontend uses:

Technology| Purpose
Next.js 16| Application framework and routing
React 19| UI and component development
Tailwind CSS| Styling and responsive layouts
Recharts| Data visualization
Base UI| Primitive UI components
shadcn-style components| Reusable interface components
Lucide React| UI icons
clsx| Conditional class handling
tailwind-merge| Merging Tailwind classes

The application uses the Next.js App Router.

---

3. Frontend Directory Structure

The important structure is:

app/
├── page.js
├── layout.js
│
├── About/
│   └── page.js
│
├── Predict/
│   └── page.js
│
├── Compare/
│   └── page.js
│
├── Charts/
│   ├── ComparisonFeature.jsx
│   ├── HyperParameterTable.jsx
│   ├── KmVsPriceChart.jsx
│   ├── PriceComparison.jsx
│   ├── RsqaureChart.jsx
│   ├── TableComponent.js
│   └── TrainVsTestRsquare.jsx
│
└── components/
    ├── Navbar.jsx
    ├── Normalform.jsx
    ├── Dashboard.jsx
    ├── Allmodelsstats.jsx
    ├── CardsContainer.jsx
    │
    ├── MetricBarComponent/
    │   ├── MetricBar.jsx
    │   └── MetricBars.jsx
    │
    ├── Hyperparametercards/
    │   ├── HyperParameter.jsx
    │   ├── LinearCard.jsx
    │   ├── RidgeCard.jsx
    │   ├── LassoCard.jsx
    │   ├── RandomForestCard.jsx
    │   └── XGBoostCard.jsx
    │
    └── Svgfolder/
        └── reusable SVG/icon components

components/
└── ui/
    ├── button.jsx
    ├── combobox.jsx
    ├── input.jsx
    ├── input-group.jsx
    ├── table.jsx
    └── textarea.jsx

lib/
└── utils.js

---

4. Application-Level Architecture

The frontend can be understood as four layers.

┌───────────────────────────────────────┐
│              Pages / Routes           │
│                                       │
│ Home   Predict   Compare   About      │
└───────────────────┬───────────────────┘
                    │
                    ▼
┌───────────────────────────────────────┐
│          Feature Components           │
│                                       │
│ Normalform     Dashboard              │
│ Allmodelsstats MetricBars             │
│ Hyperparameters                         │
└───────────────────┬───────────────────┘
                    │
                    ▼
┌───────────────────────────────────────┐
│          Visualization Layer          │
│                                       │
│ Recharts + Tables + Metric bars       │
└───────────────────┬───────────────────┘
                    │
                    ▼
┌───────────────────────────────────────┐
│             Backend API               │
│                                       │
│ Prediction + Dataset + ML statistics  │
└───────────────────────────────────────┘

There is also a reusable UI layer underneath the feature components:

Feature Components
       │
       ▼
Reusable UI Components
       │
       ├── Button
       ├── Input
       ├── Combobox
       ├── Table
       └── Textarea

SVG components are primarily presentation components and are kept separately under "Svgfolder".

---

5. Global Application Flow

"app/layout.js" is the root layout for the application.

It:

1. Imports global CSS.
2. Configures the Geist fonts.
3. Creates the root "<html>" and "<body>".
4. Receives the current page through the "children" prop.

Conceptually:

Next.js application
       │
       ▼
RootLayout
       │
       ├── Global CSS
       ├── Fonts
       └── Current route/page

The application does not currently use a custom React global state provider.

---

6. Navigation Flow

"Navbar.jsx" is shared by the main pages.

It uses Next.js "Link" components for navigation:

Navbar
 │
 ├── Home      → /
 ├── Predict   → /Predict
 ├── Compare   → /Compare
 └── About     → /About

This means navigation is handled through the Next.js App Router rather than manually changing browser locations.

The navbar also contains product-level information such as:

- Number of models
- Best R²
- Number of car records

The SVG/car icon used in the navbar is presentation-only.

---

7. Home Page Workflow

The root page is:

app/page.js

The Home page is primarily a product introduction and does not currently perform an API request.

Its structure is:

Home
 │
 ├── Navbar
 │
 ├── Hero section
 │     ├── CarSense title
 │     ├── Product description
 │     ├── Prediction CTA
 │     └── Model comparison CTA
 │
 ├── Car image
 │
 └── Product/statistic cards
       ├── Dataset information
       ├── ML information
       ├── Prediction information
       └── Analysis information

The page uses reusable SVG components such as:

- "PredictIcon"
- "TrendUp"
- "Database"
- "Cube"
- "TargetIcon"

These SVG components do not control application logic.

---

8. Prediction Page — Main Application Flow

The prediction page is the most important frontend workflow.

The route is:

/Predict

The page maintains the main prediction state:

prediction

Initially:

prediction = null

After a successful prediction request, the backend response is stored in this state.

The architecture is:

Predict Page
 │
 ├── Navbar
 │
 ├── Normalform
 │      │
 │      └── setprediction()
 │
 └── Dashboard
        │
        └── prediction

The Dashboard is only rendered after "prediction" contains data.

Therefore:

Initial state
     │
     ▼
prediction = null
     │
     ▼
Show prediction form
     │
     │ User submits vehicle information
     ▼
Backend /predict
     │
     ▼
Prediction response
     │
     ▼
setprediction(result)
     │
     ▼
prediction != null
     │
     ▼
Dashboard appears

This is the central frontend state transition of the prediction feature.

---

9. Normalform — Vehicle Input Layer

"Normalform.jsx" is a client component because it manages interactive form state and performs API requests.

It maintains state for vehicle attributes including:

- Car name
- Brand
- Model
- Vehicle age
- Kilometres driven
- Fuel type
- Seller/owner type
- Transmission
- Engine
- Maximum power
- Mileage

The form state is maintained locally using React "useState".

Conceptually:

User Input
   │
   ├── car_name
   ├── brand
   ├── model
   ├── vehicle_age
   ├── km_driven
   ├── fuel_type
   ├── seller_type
   ├── transmission_type
   ├── engine
   ├── max_power
   └── mileage

---

10. Initial Dropdown Data Flow

When "Normalform" mounts, it requests available values from the backend.

It currently requests:

GET /data-brand_names
GET /data-car_names
GET /data-model_names

The responses populate:

BrandOptions
CarNameOptions
ModelOptions

The flow is:

Normalform mounts
       │
       ▼
useEffect()
       │
       ├── /data-brand_names
       ├── /data-car_names
       └── /data-model_names
       │
       ▼
Backend JSON responses
       │
       ▼
React state
       │
       ├── BrandOptions
       ├── CarNameOptions
       └── ModelOptions
       │
       ▼
Combobox components

This allows the dropdown options to originate from backend data instead of being completely hardcoded in the frontend.

---

11. Prediction Submission Flow

When the user submits the form, "handleSubmit()" creates the prediction payload.

The frontend converts numeric fields using "Number()" before sending them.

The payload contains:

{
    car_name,
    brand,
    model,
    vehicle_age,
    km_driven,
    seller_type,
    fuel_type,
    engine,
    max_power,
    mileage,
    transmission_type
}

The frontend then sends:

POST /predict
Content-Type: application/json

The complete flow is:

User fills form
      │
      ▼
React component state
      │
      ▼
handleSubmit()
      │
      ▼
Create formData object
      │
      ▼
JSON.stringify(formData)
      │
      ▼
POST /predict
      │
      ▼
Flask backend
      │
      ▼
ML prediction
      │
      ▼
JSON response
      │
      ▼
setprediction(result)
      │
      ▼
Dashboard

The frontend therefore acts as the input and presentation layer, while the backend performs the actual prediction.

---

12. Prediction Dashboard

"Dashboard.jsx" receives:

prediction

as a prop from "Predict/page.js".

The Dashboard presents:

1. Best model prediction
2. Model comparison
3. Feature importance
4. R² comparison
5. Kilometres vs price visualization

The conceptual structure is:

Dashboard
 │
 ├── Best model summary
 │
 ├── Allmodelsstats
 │
 ├── Feature importance
 │      └── MetricBars
 │
 └── Charts
        ├── R² comparison
        └── KM vs price

---

13. Dashboard Data Flow

The Dashboard also requests feature-importance data from:

GET /data-feature-importance

The response is stored in local state.

The flow becomes:

Prediction response
       │
       ▼
Predict Page
       │
       ▼
Dashboard(prediction)
       │
       ├───────────────┐
       │               │
       ▼               ▼
prediction data     Feature API
       │               │
       │               ▼
       │        feature importance
       │               │
       └───────┬───────┘
               ▼
          Dashboard UI

---

14. Model Statistics

"Allmodelsstats.jsx" displays prediction information for multiple models.

The current frontend consumes model data from the "prediction" object.

Models represented include:

- XGBoost
- Random Forest
- Linear Regression
- Ridge Regression
- Lasso Regression

The displayed information includes:

- Test R²
- MAE
- Model prediction
- Best-model indicator

Conceptually:

prediction.models
      │
      ├── xgboost
      ├── random_forest
      ├── linear_regression
      ├── ridge
      └── lasso

The frontend does not train these models. It receives their results from the backend.

---

15. Feature Importance Visualization

The feature importance section uses:

MetricBars
   │
   └── MetricBar

"MetricBars" receives an array of feature data and maps each item to a "MetricBar".

Flow:

Feature importance API response
          │
          ▼
Dashboard state
          │
          ▼
MetricBars
          │
          ├── MetricBar
          ├── MetricBar
          ├── MetricBar
          └── ...

Separate model groups are currently displayed for:

- XGBoost
- Random Forest
- Linear Regression
- Lasso Regression

---

16. Prediction Charts

The Dashboard currently contains two chart components.

R² comparison

"RsqaureChart.jsx" uses Recharts "BarChart".

It visually compares model R² values.

The current chart data is defined inside the frontend component.

RsqaureChart
     │
     ▼
Recharts BarChart
     │
     ├── Linear
     ├── Ridge
     ├── Lasso
     └── Random Forest

KM vs Price

"KmVsPriceChart.jsx" uses a Recharts scatter chart.

It visualizes:

X-axis → km_driven
Y-axis → price

The current implementation contains a local sample dataset rather than receiving that data from the backend.

This distinction is important for future development: the frontend architecture already supports charts, but this chart currently uses static data.

---

17. Compare Page

The "/Compare" page is the frontend's model-analysis section.

It allows the user to inspect the performance of different regression models.

The page maintains state for:

pricedata
loading
featuresdataloading
tabledataloading
selectedmodel
models
featureImportance

The central concept is:

selectedmodel

The selected model determines which model-specific feature importance and actual-vs-predicted data are displayed.

---

18. Compare Page API Flow

When the Compare page loads, it performs three main API requests.

Price comparison

GET /data-pricecomparison

Used by:

PriceComparison

Model comparison table

GET /data-tabledata

Used by:

TableComponent

Feature importance

GET /data-feature-importance

Used by:

ComparisonFeature

The flow is:

Compare Page
    │
    ├── /data-pricecomparison
    │       ↓
    │   pricedata
    │
    ├── /data-tabledata
    │       ↓
    │   models
    │
    └── /data-feature-importance
            ↓
      featureImportance

Each request has its own loading state.

---

19. Model Selection Flow

The Compare page provides model selectors.

The current models include:

Linear Regression
Lasso Regression
Ridge Regression
Random Forest
XGBoost

When the user selects a model:

User clicks model
       │
       ▼
setselectedmodel(...)
       │
       ▼
selectedmodel changes
       │
       ├── Feature importance updates
       └── Actual vs predicted data updates

This means the comparison dashboard is controlled by a single piece of React state.

---

20. Compare Page Visualization Architecture

The Compare page combines several independent visualization components.

Compare
 │
 ├── TrainVsTestRsquare
 │
 ├── ComparisonFeature
 │
 ├── PriceComparison
 │
 ├── TableComponent
 │
 ├── HyperParameter
 │
 └── XGBoost explanation

TrainVsTestRsquare

Displays Train R² and Test R² for the models.

ComparisonFeature

Displays feature importance for the currently selected model.

PriceComparison

Displays actual versus predicted prices and a perfect-prediction reference line.

TableComponent

Displays model metrics in tabular form:

Model
Train R²
Test R²
MAE
Status

HyperParameter

Displays the selected model's hyperparameter information through the hyperparameter card components.

---

21. Actual vs Predicted Flow

"PriceComparison.jsx" receives data through its "data" prop.

It determines the maximum value between actual and predicted values and constructs a reference dataset for a perfect-prediction line.

Conceptually:

Actual price
     │
     ├───────────────┐
     │               │
     ▼               ▼
Predicted price   Perfect line
     │               │
     └───────┬───────┘
             ▼
       Scatter Chart

The closer a prediction point is to the diagonal reference line, the closer the prediction is to the actual price.

---

22. Reusable UI Component Layer

The "components/ui" directory contains lower-level reusable interface primitives.

Examples:

Button
Input
Textarea
Combobox
Table
InputGroup

These components provide consistent UI behavior and styling while allowing feature components such as "Normalform" and "TableComponent" to remain focused on application-specific behavior.

For example:

Normalform
    │
    ▼
Combobox
    │
    ├── ComboboxInput
    ├── ComboboxContent
    ├── ComboboxList
    └── ComboboxItem

The Combobox implementation is built on Base UI primitives.

---

23. SVG Component Layer

The project contains a large collection of SVG components under:

app/components/Svgfolder/

These should be considered presentation components, not core application logic.

Examples include:

- Database
- Trophy
- Brain
- XGBoost
- Target
- Search
- Mission
- Vision
- CheckCircle
- TrendUp
- PredictIcon
- BulletDot

Their role is primarily:

Feature component
      │
      ▼
SVG component
      │
      ▼
Visual icon

They do not participate in API requests, state management, or prediction logic.

Therefore, the documentation does not need to explain each SVG individually.

---

24. Styling Architecture

The frontend primarily uses Tailwind CSS utility classes directly inside JSX.

Styling responsibilities are distributed between:

globals.css
      +
Tailwind utility classes
      +
Reusable UI component classes

The project uses responsive Tailwind breakpoints such as:

sm:
md:
lg:

to change layouts for different screen sizes.

For example, the Predict page changes from a vertical layout to a side-by-side layout on larger screens.

---

25. Environment Configuration

The frontend obtains the backend URL from:

NEXT_PUBLIC_API_URL

This is used by components such as "Normalform" and "Compare".

Therefore, API calls follow the pattern:

NEXT_PUBLIC_API_URL
        +
endpoint
        ↓
Backend API

For example:

${API_URL}/predict
${API_URL}/data-brand_names
${API_URL}/data-car_names
${API_URL}/data-model_names
${API_URL}/data-pricecomparison
${API_URL}/data-tabledata
${API_URL}/data-feature-importance

This separates the frontend code from a hardcoded backend host and makes it possible to change the backend URL between environments.

---

26. Complete Prediction Workflow

The complete current prediction workflow can be summarized as:

USER
 │
 ▼
/Predict
 │
 ▼
Normalform
 │
 ├── Fetch brand names
 ├── Fetch car names
 └── Fetch model names
 │
 ▼
User enters vehicle information
 │
 ▼
React component state
 │
 ▼
handleSubmit()
 │
 ▼
Build JSON payload
 │
 ▼
POST /predict
 │
 ▼
FLASK BACKEND
 │
 ▼
ML MODEL / PIPELINE
 │
 ▼
Prediction JSON
 │
 ▼
setprediction(result)
 │
 ▼
Dashboard
 │
 ├── Best model prediction
 ├── All model predictions
 ├── R²
 ├── MAE
 ├── Feature importance
 ├── R² chart
 └── KM vs price chart

This is the main business workflow of the frontend.

---

27. Complete Model Comparison Workflow

USER
 │
 ▼
/Compare
 │
 ▼
Compare page mounts
 │
 ├── GET /data-pricecomparison
 │
 ├── GET /data-tabledata
 │
 └── GET /data-feature-importance
 │
 ▼
Store API responses in React state
 │
 ▼
User selects model
 │
 ▼
selectedmodel changes
 │
 ├── Feature importance
 │
 ├── Actual vs predicted
 │
 └── Hyperparameters
 │
 ▼
Recharts / Table UI
 │
 ▼
Model analysis displayed

---

28. Component Responsibility Summary

Component| Responsibility
"Navbar"| Application navigation
"Normalform"| Collect vehicle data and call prediction API
"Dashboard"| Display prediction results and analytics
"Allmodelsstats"| Display model-level prediction metrics
"MetricBars"| Render multiple feature metrics
"MetricBar"| Render one metric
"Compare"| Main model comparison page and state management
"TrainVsTestRsquare"| Train/Test R² visualization
"ComparisonFeature"| Feature-importance visualization
"PriceComparison"| Actual vs predicted visualization
"TableComponent"| Model metrics table
"HyperParameter"| Model hyperparameter presentation
SVG components| Presentation-only icons
UI components| Reusable low-level interface primitives

---

29. Current Frontend Architecture in One Diagram

                         CarSense Frontend
                                │
             ┌──────────────────┼──────────────────┐
             │                  │                  │
             ▼                  ▼                  ▼
           Home              Predict            Compare
             │                  │                  │
             │                  ▼                  ▼
             │             Normalform         API Requests
             │                  │                  │
             │                  ▼                  ├── price comparison
             │             POST /predict           ├── table data
             │                  │                  └── feature importance
             │                  ▼
             │             prediction
             │                  │
             │                  ▼
             │             Dashboard
             │                  │
             │       ┌──────────┼──────────┐
             │       │          │          │
             │       ▼          ▼          ▼
             │   Model stats  Metrics    Charts
             │
             └──────────────────────────────────────┐
                                                    │
                                                    ▼
                                             Backend API
                                                    │
                                                    ▼
                                           ML / Data Layer

---

30. Important Architectural Principle

The frontend currently follows a useful separation of responsibilities:

Pages
  ↓
Feature Components
  ↓
UI / Visualization Components
  ↓
Backend APIs

The frontend is responsible for:

- User interaction
- Form state
- API communication
- Loading states
- Rendering predictions
- Rendering model analytics
- Visualization
- Navigation

The backend is responsible for:

- Data processing
- Machine-learning models
- Predictions
- Dataset-derived information
- Model metrics
- Feature importance
- Other server-side processing

This separation is important when explaining CarSense in an interview.

---

31. Interview-Level Explanation

A concise explanation of the frontend architecture is:

«"CarSense uses Next.js with the App Router. I separated the application into page-level routes such as Home, Predict, Compare, and About, and then broke the feature logic into reusable components. The Predict page maintains the prediction state and passes the setter to the form component. The form collects the vehicle features and sends them to my Flask backend through the prediction API. Once the response is received, the prediction state is updated and the Dashboard renders the model results, feature importance, and visualizations. The Compare page independently fetches model-comparison data from the backend and uses React state to control which model's feature importance, prediction comparison, and hyperparameters are displayed. I also separated reusable UI primitives and presentation-only SVG components from the feature-specific components."»

---

32. Current Documentation Status

This documentation describes the current implementation, not a hypothetical final architecture.

As CarSense continues to evolve, the documentation should be updated when:

- A new route is added.
- A new API endpoint is introduced.
- State management changes.
- Authentication is introduced.
- A component is refactored.
- A chart starts receiving data from the backend.
- Deployment architecture changes.

The most important principle is:

«Document the architecture that actually exists. Do not document planned functionality as if it were already implemented.»