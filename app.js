// Uruk Healthcare Developer Dashboard JavaScript

// Application data from the healthcare platform
const appData = {
  developer: {
    name: "Arjun Patel",
    id: "DEV001",
    role: "Senior Full Stack Developer",
    team: "Uruk Core Platform",
    experience: "6 years",
    email: "arjun.patel@uruk.dev",
    githubUsername: "arjun-uruk",
    preferredLanguages: ["JavaScript", "Python", "Go"],
    currentSprint: "Sprint 24 - Q4 2025"
  },
  developmentMetrics: {
    commitsToday: 7,
    pullRequestsPending: 3,
    buildSuccessRate: "94%",
    testCoverage: "87%",
    codeReviewsCompleted: 12,
    bugsFixed: 5,
    featuresDeployed: 2,
    systemUptime: "99.8%"
  },
  repositories: [
    {
      name: "uruk-patient-portal",
      language: "React/Node.js",
      lastCommit: "2025-10-05 08:30",
      author: "Arjun Patel",
      branch: "feature/u-card-integration",
      status: "Active Development",
      pullRequests: 2,
      issues: 8,
      testCoverage: "89%"
    },
    {
      name: "uruk-doctor-api",
      language: "Python/FastAPI",
      lastCommit: "2025-10-04 16:45",
      author: "Priya Singh",
      branch: "main",
      status: "Staging Ready",
      pullRequests: 1,
      issues: 3,
      testCoverage: "92%"
    },
    {
      name: "uruk-pharmacy-service",
      language: "Go/PostgreSQL",
      lastCommit: "2025-10-04 14:20",
      author: "Ravi Kumar",
      branch: "hotfix/inventory-sync",
      status: "Production",
      pullRequests: 0,
      issues: 2,
      testCoverage: "85%"
    },
    {
      name: "uruk-ambulance-tracker",
      language: "Flutter/Dart",
      lastCommit: "2025-10-03 11:15",
      author: "Meera Shah",
      branch: "feature/gps-optimization",
      status: "Code Review",
      pullRequests: 3,
      issues: 12,
      testCoverage: "78%"
    }
  ],
  apiEndpoints: [
    {
      endpoint: "/api/v1/patients",
      method: "GET",
      responseTime: "145ms",
      successRate: "99.2%",
      requestsToday: 15420,
      lastUpdate: "2025-10-04",
      status: "Healthy"
    },
    {
      endpoint: "/api/v1/prescriptions",
      method: "POST",
      responseTime: "230ms",
      successRate: "97.8%",
      requestsToday: 8760,
      lastUpdate: "2025-10-05",
      status: "Healthy"
    },
    {
      endpoint: "/api/v1/ambulance/location",
      method: "PUT",
      responseTime: "89ms",
      successRate: "98.5%",
      requestsToday: 12340,
      lastUpdate: "2025-10-05",
      status: "Healthy"
    },
    {
      endpoint: "/api/v1/doctors/availability",
      method: "GET",
      responseTime: "320ms",
      successRate: "96.1%",
      requestsToday: 6890,
      lastUpdate: "2025-10-04",
      status: "Warning"
    }
  ],
  systemHealth: {
    apiGateway: {
      status: "Healthy",
      responseTime: "12ms",
      uptime: "99.9%",
      requestsPerSecond: 450
    },
    database: {
      status: "Healthy",
      connectionPool: "85% utilized",
      queryTime: "3.2ms avg",
      activeConnections: 127
    },
    cacheLayer: {
      status: "Healthy",
      hitRate: "94.2%",
      memoryUsage: "68%",
      evictionRate: "0.1%"
    },
    messageQueue: {
      status: "Healthy",
      queueDepth: 23,
      processingRate: "1,200/min",
      deadLetters: 0
    }
  },
  deployments: [
    {
      environment: "Production",
      version: "v2.4.1",
      deployedAt: "2025-10-04 09:15",
      deployedBy: "Arjun Patel",
      status: "Stable",
      health: "Green",
      rollbackAvailable: true
    },
    {
      environment: "Staging",
      version: "v2.5.0-rc.2",
      deployedAt: "2025-10-05 07:30",
      deployedBy: "CI Pipeline",
      status: "Testing",
      health: "Green",
      rollbackAvailable: true
    },
    {
      environment: "Development",
      version: "v2.5.0-dev",
      deployedAt: "2025-10-05 08:45",
      deployedBy: "Auto Deploy",
      status: "Active",
      health: "Yellow",
      rollbackAvailable: false
    }
  ],
  issues: [
    {
      id: "URK-456",
      title: "U-Card authentication timeout on mobile",
      type: "Bug",
      priority: "High",
      status: "In Progress",
      assignee: "Arjun Patel",
      reporter: "QA Team",
      created: "2025-10-04",
      estimate: "8 hours",
      labels: ["mobile", "authentication", "u-card"]
    },
    {
      id: "URK-457",
      title: "Add prescription history export feature",
      type: "Feature",
      priority: "Medium",
      status: "Backlog",
      assignee: "Priya Singh",
      reporter: "Product Owner",
      created: "2025-10-03",
      estimate: "16 hours",
      labels: ["prescription", "export", "feature"]
    },
    {
      id: "URK-458",
      title: "Optimize ambulance tracking query performance",
      type: "Performance",
      priority: "High",
      status: "Code Review",
      assignee: "Ravi Kumar",
      reporter: "DevOps Team",
      created: "2025-10-02",
      estimate: "12 hours",
      labels: ["performance", "ambulance", "database"]
    }
  ],
  userAnalytics: {
    activeUsers: {
      patients: 15420,
      doctors: 892,
      pharmacies: 245,
      ambulanceDrivers: 78
    },
    systemUsage: {
      appointmentsBooked: 1256,
      prescriptionsFilled: 3420,
      emergencyCalls: 45,
      uCardTransactions: 8760
    },
    performanceMetrics: {
      avgLoadTime: "1.8s",
      bounceRate: "12.4%",
      errorRate: "0.3%",
      mobileUsage: "68%"
    }
  },
  securityStatus: {
    vulnerabilities: {
      critical: 0,
      high: 2,
      medium: 5,
      low: 12
    },
    compliance: {
      hipaa: "Compliant",
      gdpr: "Compliant",
      lastAudit: "2025-09-15",
      nextAudit: "2025-12-15"
    },
    certificates: [
      {
        domain: "api.uruk.health",
        issuer: "Let's Encrypt",
        expires: "2025-12-20",
        status: "Valid"
      },
      {
        domain: "app.uruk.health",
        issuer: "DigiCert",
        expires: "2026-01-15",
        status: "Valid"
      }
    ]
  },
  teamActivity: [
    {
      developer: "Arjun Patel",
      action: "Pushed 3 commits to feature/u-card-integration",
      timestamp: "2025-10-05 08:45",
      repository: "uruk-patient-portal"
    },
    {
      developer: "Priya Singh",
      action: "Opened pull request for prescription export feature",
      timestamp: "2025-10-05 08:30",
      repository: "uruk-doctor-api"
    },
    {
      developer: "Ravi Kumar",
      action: "Fixed performance issue in ambulance tracking",
      timestamp: "2025-10-04 16:45",
      repository: "uruk-pharmacy-service"
    },
    {
      developer: "Meera Shah",
      action: "Completed code review for mobile authentication",
      timestamp: "2025-10-04 15:20",
      repository: "uruk-ambulance-tracker"
    }
  ],
  testResults: {
    unitTests: {
      passed: 1247,
      failed: 23,
      coverage: "87%",
      runtime: "4m 32s"
    },
    integrationTests: {
      passed: 156,
      failed: 4,
      coverage: "78%",
      runtime: "12m 15s"
    },
    e2eTests: {
      passed: 89,
      failed: 2,
      coverage: "65%",
      runtime: "25m 48s"
    }
  },
  infrastructure: {
    servers: {
      webServers: {
        count: 4,
        cpuUsage: "45%",
        memoryUsage: "62%",
        diskUsage: "34%"
      },
      appServers: {
        count: 6,
        cpuUsage: "38%",
        memoryUsage: "58%",
        diskUsage: "41%"
      },
      dbServers: {
        count: 3,
        cpuUsage: "52%",
        memoryUsage: "74%",
        diskUsage: "67%"
      }
    },
    monitoring: {
      uptime: "99.8%",
      avgResponseTime: "89ms",
      errorRate: "0.2%",
      throughput: "2.3k req/min"
    }
  }
};

// Global variables
let currentPage = 'overview';
let charts = {};
let autoRefreshInterval;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    startAutoRefresh();
});

function initializeApp() {
    loadOverviewData();
    loadRepositories();
    loadApiEndpoints();
    loadDatabaseHealth();
    loadSystemMonitoring();
    loadIssues();
    loadDeployments();
    loadUserAnalytics();
    loadSecurityStatus();
    loadTeamCollaboration();
    loadDocumentation();
    loadDeveloperSettings();
}

function setupEventListeners() {
    // Navigation
    const sidebarLinks = document.querySelectorAll('.sidebar__link');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.getAttribute('data-page');
            showPage(page);
        });
    });

    // Search functionality
    const repoSearch = document.getElementById('repoSearch');
    if (repoSearch) {
        repoSearch.addEventListener('input', (e) => {
            filterRepositories(e.target.value);
        });
    }

    const docSearch = document.getElementById('docSearch');
    if (docSearch) {
        docSearch.addEventListener('input', (e) => {
            searchDocumentation(e.target.value);
        });
    }

    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            setActiveFilter(e.target);
            const filter = e.target.getAttribute('data-filter');
            filterApiEndpoints(filter);
        });
    });

    // Issue filters
    const issueFilters = ['issueTypeFilter', 'priorityFilter', 'statusFilter'];
    issueFilters.forEach(filterId => {
        const filter = document.getElementById(filterId);
        if (filter) {
            filter.addEventListener('change', () => filterIssues());
        }
    });

    // Form submissions
    const profileForm = document.getElementById('profileForm');
    if (profileForm) {
        profileForm.addEventListener('submit', handleProfileUpdate);
    }

    // Chat input
    const chatInput = document.getElementById('chatInput');
    if (chatInput) {
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }

    // Settings
    const darkModeToggle = document.getElementById('darkMode');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('change', toggleDarkMode);
    }

    const autoRefreshToggle = document.getElementById('autoRefresh');
    if (autoRefreshToggle) {
        autoRefreshToggle.addEventListener('change', toggleAutoRefresh);
    }
}

function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
    // Update navigation
    document.querySelectorAll('.sidebar__link').forEach(link => {
        link.classList.remove('active');
    });
    
    const activeLink = document.querySelector(`[data-page="${pageId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
    
    currentPage = pageId;
    
    // Load page-specific charts
    setTimeout(() => {
        if (pageId === 'api-management' && !charts.apiPerformance) {
            createApiPerformanceChart();
        }
        if (pageId === 'monitoring' && !charts.performance) {
            createPerformanceChart();
        }
        if (pageId === 'analytics' && !charts.userActivity) {
            createUserActivityChart();
        }
    }, 100);
}

// Overview Page Functions
function loadOverviewData() {
    loadSystemHealth();
    loadRecentActivity();
    loadDeploymentStatus();
}

function loadSystemHealth() {
    const container = document.getElementById('systemHealthList');
    if (!container) return;

    container.innerHTML = '';
    
    Object.entries(appData.systemHealth).forEach(([key, health]) => {
        const healthItem = document.createElement('div');
        healthItem.className = 'health-item';
        
        const statusClass = health.status === 'Healthy' ? 'healthy' : 'warning';
        
        healthItem.innerHTML = `
            <div class="health-item__header">
                <div class="health-item__name">${formatSystemName(key)}</div>
                <div class="health-status ${statusClass}">${health.status}</div>
            </div>
            <div class="health-metrics">
                ${Object.entries(health).filter(([k]) => k !== 'status').map(([metricKey, value]) => `
                    <div class="health-metric">
                        <span class="health-metric__label">${formatMetricName(metricKey)}</span>
                        <span class="health-metric__value">${value}</span>
                    </div>
                `).join('')}
            </div>
        `;
        
        container.appendChild(healthItem);
    });
}

function loadRecentActivity() {
    const container = document.getElementById('recentActivity');
    if (!container) return;

    container.innerHTML = '';
    
    appData.teamActivity.slice(0, 6).forEach(activity => {
        const activityItem = document.createElement('div');
        activityItem.className = 'activity-item';
        
        const initials = activity.developer.split(' ').map(n => n[0]).join('');
        const timeAgo = getTimeAgo(activity.timestamp);
        
        activityItem.innerHTML = `
            <div class="activity-avatar">${initials}</div>
            <div class="activity-content">
                <div class="activity-action">${activity.action}</div>
                <div class="activity-meta">
                    <span>${activity.developer}</span>
                    <span>•</span>
                    <span>${activity.repository}</span>
                    <span>•</span>
                    <span>${timeAgo}</span>
                </div>
            </div>
        `;
        
        container.appendChild(activityItem);
    });
}

function loadDeploymentStatus() {
    const container = document.getElementById('deploymentStatus');
    if (!container) return;

    container.innerHTML = '';
    
    appData.deployments.forEach(deployment => {
        const deploymentItem = document.createElement('div');
        deploymentItem.className = 'deployment-item';
        
        const healthClass = deployment.health.toLowerCase();
        
        deploymentItem.innerHTML = `
            <div class="deployment-env">${deployment.environment}</div>
            <div class="deployment-version">${deployment.version}</div>
            <div class="deployment-status">
                <span>${deployment.status}</span>
                <div class="deployment-health ${healthClass}">${deployment.health}</div>
            </div>
            <div class="deployment-meta">
                Deployed ${getTimeAgo(deployment.deployedAt)} by ${deployment.deployedBy}
            </div>
        `;
        
        container.appendChild(deploymentItem);
    });
}

// Repository Functions
function loadRepositories() {
    displayRepositories(appData.repositories);
}

function displayRepositories(repositories) {
    const container = document.getElementById('repositoryList');
    if (!container) return;

    container.innerHTML = '';
    
    repositories.forEach(repo => {
        const repoCard = document.createElement('div');
        repoCard.className = 'repository-card';
        
        const statusClass = repo.status.toLowerCase().replace(' ', '-').replace(' ', '');
        const timeAgo = getTimeAgo(repo.lastCommit);
        
        repoCard.innerHTML = `
            <div class="repo-header">
                <div class="repo-name">
                    <i class="fas fa-code-branch"></i>
                    ${repo.name}
                </div>
                <div class="repo-language">${repo.language}</div>
            </div>
            <div class="repo-details">
                <div class="repo-detail">
                    <span class="repo-detail__label">Branch</span>
                    <span class="repo-detail__value">${repo.branch}</span>
                </div>
                <div class="repo-detail">
                    <span class="repo-detail__label">Last Commit</span>
                    <span class="repo-detail__value">${timeAgo}</span>
                </div>
                <div class="repo-detail">
                    <span class="repo-detail__label">Author</span>
                    <span class="repo-detail__value">${repo.author}</span>
                </div>
            </div>
            <div class="repo-stats">
                <div class="repo-stat">
                    <i class="fas fa-code-pull-request"></i>
                    ${repo.pullRequests} PRs
                </div>
                <div class="repo-stat">
                    <i class="fas fa-bug"></i>
                    ${repo.issues} Issues
                </div>
                <div class="repo-stat">
                    <i class="fas fa-shield-alt"></i>
                    ${repo.testCoverage} Coverage
                </div>
            </div>
            <div class="repo-status ${statusClass}">${repo.status}</div>
            <div class="repo-actions">
                <button class="btn btn--outline btn--sm" onclick="viewRepository('${repo.name}')">
                    <i class="fas fa-eye"></i> View
                </button>
                <button class="btn btn--outline btn--sm" onclick="cloneRepository('${repo.name}')">
                    <i class="fas fa-download"></i> Clone
                </button>
                <button class="btn btn--primary btn--sm" onclick="openInIDE('${repo.name}')">
                    <i class="fas fa-code"></i> Open in IDE
                </button>
            </div>
        `;
        
        container.appendChild(repoCard);
    });
}

function filterRepositories(searchTerm) {
    const filtered = appData.repositories.filter(repo =>
        repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        repo.language.toLowerCase().includes(searchTerm.toLowerCase()) ||
        repo.branch.toLowerCase().includes(searchTerm.toLowerCase())
    );
    displayRepositories(filtered);
}

// API Management Functions
function loadApiEndpoints() {
    displayApiEndpoints(appData.apiEndpoints);
}

function displayApiEndpoints(endpoints) {
    const container = document.getElementById('apiEndpointsList');
    if (!container) return;

    container.innerHTML = '';
    
    endpoints.forEach(endpoint => {
        const endpointItem = document.createElement('div');
        endpointItem.className = 'api-endpoint';
        
        const statusClass = endpoint.status.toLowerCase();
        const statusIcon = endpoint.status === 'Healthy' ? 'check-circle' : 'exclamation-triangle';
        
        endpointItem.innerHTML = `
            <div class="endpoint-header">
                <div style="display: flex; align-items: center;">
                    <div class="endpoint-method ${endpoint.method}">${endpoint.method}</div>
                    <div class="endpoint-path">${endpoint.endpoint}</div>
                </div>
                <div class="endpoint-status">
                    <i class="fas fa-${statusIcon}"></i>
                    <span>${endpoint.status}</span>
                </div>
            </div>
            <div class="endpoint-metrics">
                <div class="endpoint-metric">
                    <div class="endpoint-metric__value">${endpoint.responseTime}</div>
                    <div class="endpoint-metric__label">Avg Response</div>
                </div>
                <div class="endpoint-metric">
                    <div class="endpoint-metric__value">${endpoint.successRate}</div>
                    <div class="endpoint-metric__label">Success Rate</div>
                </div>
                <div class="endpoint-metric">
                    <div class="endpoint-metric__value">${endpoint.requestsToday.toLocaleString()}</div>
                    <div class="endpoint-metric__label">Requests Today</div>
                </div>
                <div class="endpoint-metric">
                    <div class="endpoint-metric__value">${endpoint.lastUpdate}</div>
                    <div class="endpoint-metric__label">Last Updated</div>
                </div>
            </div>
        `;
        
        container.appendChild(endpointItem);
    });
}

function filterApiEndpoints(filter) {
    let filtered = appData.apiEndpoints;
    
    if (filter !== 'all') {
        filtered = appData.apiEndpoints.filter(endpoint => 
            endpoint.status.toLowerCase() === filter
        );
    }
    
    displayApiEndpoints(filtered);
}

function createApiPerformanceChart() {
    const ctx = document.getElementById('apiPerformanceChart');
    if (!ctx) return;

    const data = {
        labels: ['Patients API', 'Prescriptions API', 'Ambulance API', 'Doctors API'],
        datasets: [{
            label: 'Response Time (ms)',
            data: [145, 230, 89, 320],
            backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5'],
            borderWidth: 0
        }]
    };

    charts.apiPerformance = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Response Time (ms)'
                    }
                }
            }
        }
    });
}

// Database Functions
function loadDatabaseHealth() {
    const container = document.getElementById('databaseHealth');
    if (!container) return;

    const dbMetrics = [
        { label: 'Active Connections', value: '127', status: 'healthy' },
        { label: 'Connection Pool', value: '85%', status: 'warning' },
        { label: 'Query Time', value: '3.2ms', status: 'healthy' },
        { label: 'Slow Queries', value: '4', status: 'warning' }
    ];

    container.innerHTML = '';
    
    dbMetrics.forEach(metric => {
        const metricItem = document.createElement('div');
        metricItem.className = 'health-item';
        
        metricItem.innerHTML = `
            <div class="health-item__header">
                <div class="health-item__name">${metric.label}</div>
                <div class="health-status ${metric.status}">${metric.value}</div>
            </div>
        `;
        
        container.appendChild(metricItem);
    });

    loadSlowQueries();
}

function loadSlowQueries() {
    const container = document.getElementById('slowQueries');
    if (!container) return;

    const slowQueries = [
        {
            query: "SELECT p.*, pr.medication FROM patients p JOIN prescriptions pr ON p.id = pr.patient_id WHERE p.created_at > '2025-01-01'",
            duration: "2.3s",
            executions: "156",
            lastRun: "2 minutes ago"
        },
        {
            query: "UPDATE ambulance_locations SET lat = ?, lng = ? WHERE ambulance_id = ? AND status = 'active'",
            duration: "1.8s",
            executions: "89",
            lastRun: "5 minutes ago"
        }
    ];

    container.innerHTML = '';
    
    slowQueries.forEach(query => {
        const queryItem = document.createElement('div');
        queryItem.className = 'slow-query';
        
        queryItem.innerHTML = `
            <div class="query-text">${query.query}</div>
            <div class="query-stats">
                <span>Duration: ${query.duration}</span>
                <span>Executions: ${query.executions}</span>
                <span>Last Run: ${query.lastRun}</span>
            </div>
        `;
        
        container.appendChild(queryItem);
    });
}

// System Monitoring Functions
function loadSystemMonitoring() {
    loadServerResources();
    loadActiveAlerts();
    setTimeout(() => createPerformanceChart(), 100);
}

function loadServerResources() {
    const container = document.getElementById('serverResources');
    if (!container) return;

    const resources = [
        { type: 'Web Servers', usage: '45%', count: 4, level: 'low' },
        { type: 'App Servers', usage: '58%', count: 6, level: 'medium' },
        { type: 'DB Servers', usage: '74%', count: 3, level: 'high' }
    ];

    container.innerHTML = '';
    
    resources.forEach(resource => {
        const resourceItem = document.createElement('div');
        resourceItem.className = 'resource-item';
        
        resourceItem.innerHTML = `
            <div class="resource-type">${resource.type} (${resource.count})</div>
            <div class="resource-usage">${resource.usage}</div>
            <div class="resource-bar">
                <div class="resource-fill ${resource.level}" style="width: ${resource.usage}"></div>
            </div>
        `;
        
        container.appendChild(resourceItem);
    });
}

function loadActiveAlerts() {
    const container = document.getElementById('activeAlerts');
    if (!container) return;

    const alerts = [
        {
            type: 'warning',
            title: 'High Database Load',
            message: 'Database server CPU usage is above 70%',
            time: '5 minutes ago'
        },
        {
            type: 'info',
            title: 'Deployment Started',
            message: 'v2.5.0-rc.3 deployment to staging environment initiated',
            time: '10 minutes ago'
        }
    ];

    container.innerHTML = '';
    
    alerts.forEach(alert => {
        const alertItem = document.createElement('div');
        alertItem.className = `alert-item ${alert.type}`;
        
        alertItem.innerHTML = `
            <div class="alert-icon">
                <i class="fas fa-${alert.type === 'warning' ? 'exclamation-triangle' : 'info-circle'}"></i>
            </div>
            <div class="alert-content">
                <h4>${alert.title}</h4>
                <p>${alert.message}</p>
                <small>${alert.time}</small>
            </div>
        `;
        
        container.appendChild(alertItem);
    });
}

function createPerformanceChart() {
    const ctx = document.getElementById('performanceChart');
    if (!ctx) return;

    const data = {
        labels: ['9:00', '9:15', '9:30', '9:45', '10:00', '10:15', '10:30'],
        datasets: [
            {
                label: 'Response Time (ms)',
                data: [89, 92, 88, 91, 94, 89, 87],
                borderColor: '#1FB8CD',
                backgroundColor: 'rgba(31, 184, 205, 0.1)',
                tension: 0.3
            },
            {
                label: 'CPU Usage (%)',
                data: [45, 48, 52, 49, 51, 47, 46],
                borderColor: '#FFC185',
                backgroundColor: 'rgba(255, 193, 133, 0.1)',
                tension: 0.3
            }
        ]
    };

    charts.performance = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top'
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Issues Functions
function loadIssues() {
    displayIssues(appData.issues);
}

function displayIssues(issues) {
    const container = document.getElementById('issuesList');
    if (!container) return;

    container.innerHTML = '';
    
    issues.forEach(issue => {
        const issueItem = document.createElement('div');
        issueItem.className = 'issue-item';
        
        issueItem.innerHTML = `
            <div class="issue-header">
                <div class="issue-id">${issue.id}</div>
                <div class="issue-priority ${issue.priority}">${issue.priority}</div>
            </div>
            <div class="issue-title">${issue.title}</div>
            <div class="issue-meta">
                <span>Type: ${issue.type}</span>
                <span>Status: ${issue.status}</span>
                <span>Assignee: ${issue.assignee}</span>
                <span>Estimate: ${issue.estimate}</span>
                <span>Created: ${issue.created}</span>
            </div>
            <div class="issue-labels">
                ${issue.labels.map(label => `<span class="issue-label">${label}</span>`).join('')}
            </div>
        `;
        
        container.appendChild(issueItem);
    });
}

function filterIssues() {
    const typeFilter = document.getElementById('issueTypeFilter').value;
    const priorityFilter = document.getElementById('priorityFilter').value;
    const statusFilter = document.getElementById('statusFilter').value;

    let filtered = appData.issues;

    if (typeFilter) {
        filtered = filtered.filter(issue => issue.type === typeFilter);
    }
    if (priorityFilter) {
        filtered = filtered.filter(issue => issue.priority === priorityFilter);
    }
    if (statusFilter) {
        filtered = filtered.filter(issue => issue.status === statusFilter);
    }

    displayIssues(filtered);
}

// Deployment Functions
function loadDeployments() {
    loadPipelineStatus();
    loadRecentDeployments();
    loadTestResults();
}

function loadPipelineStatus() {
    const container = document.getElementById('pipelineStatus');
    if (!container) return;

    const stages = [
        { name: 'Build', status: 'success', icon: 'fas fa-hammer' },
        { name: 'Test', status: 'success', icon: 'fas fa-vial' },
        { name: 'Security', status: 'running', icon: 'fas fa-shield-alt' },
        { name: 'Deploy', status: 'pending', icon: 'fas fa-rocket' }
    ];

    container.innerHTML = '';
    
    stages.forEach((stage, index) => {
        const stageDiv = document.createElement('div');
        stageDiv.className = 'pipeline-stage';
        
        stageDiv.innerHTML = `
            <div class="stage-icon ${stage.status}">
                <i class="${stage.icon}"></i>
            </div>
            <div class="stage-name">${stage.name}</div>
            <div class="stage-status">${stage.status}</div>
        `;
        
        container.appendChild(stageDiv);
        
        if (index < stages.length - 1) {
            const arrow = document.createElement('div');
            arrow.className = 'pipeline-arrow';
            arrow.innerHTML = '<i class="fas fa-arrow-right"></i>';
            container.appendChild(arrow);
        }
    });
}

function loadRecentDeployments() {
    const container = document.getElementById('recentDeployments');
    if (!container) return;

    container.innerHTML = '';
    
    appData.deployments.forEach(deployment => {
        const deploymentItem = document.createElement('div');
        deploymentItem.className = 'deployment-item-detailed';
        
        const timeAgo = getTimeAgo(deployment.deployedAt);
        
        deploymentItem.innerHTML = `
            <div class="deployment-header">
                <div>
                    <strong>${deployment.environment}</strong>
                    <span style="margin-left: 12px; font-family: monospace; color: var(--dev-accent-blue);">${deployment.version}</span>
                </div>
                <div class="deployment-health ${deployment.health.toLowerCase()}">${deployment.health}</div>
            </div>
            <div style="font-size: 14px; color: var(--dev-text-secondary); margin-top: 8px;">
                Deployed ${timeAgo} by ${deployment.deployedBy}
            </div>
        `;
        
        container.appendChild(deploymentItem);
    });
}

function loadTestResults() {
    const container = document.getElementById('testResults');
    if (!container) return;

    const testTypes = [
        { name: 'Unit Tests', passed: appData.testResults.unitTests.passed, failed: appData.testResults.unitTests.failed },
        { name: 'Integration', passed: appData.testResults.integrationTests.passed, failed: appData.testResults.integrationTests.failed },
        { name: 'E2E Tests', passed: appData.testResults.e2eTests.passed, failed: appData.testResults.e2eTests.failed }
    ];

    container.innerHTML = '';
    
    testTypes.forEach(test => {
        const total = test.passed + test.failed;
        const successRate = Math.round((test.passed / total) * 100);
        
        const testItem = document.createElement('div');
        testItem.className = 'stat-item';
        
        testItem.innerHTML = `
            <div class="stat-number">${successRate}%</div>
            <div class="stat-label">${test.name}</div>
            <div style="font-size: 12px; color: var(--dev-text-muted); margin-top: 4px;">
                ${test.passed} passed, ${test.failed} failed
            </div>
        `;
        
        container.appendChild(testItem);
    });
}

// Analytics Functions
function loadUserAnalytics() {
    loadHealthcareMetrics();
    setTimeout(() => createUserActivityChart(), 100);
}

function loadHealthcareMetrics() {
    const container = document.getElementById('healthcareMetrics');
    if (!container) return;

    const metrics = [
        { label: 'Appointments Booked', value: appData.userAnalytics.systemUsage.appointmentsBooked.toLocaleString() },
        { label: 'Prescriptions Filled', value: appData.userAnalytics.systemUsage.prescriptionsFilled.toLocaleString() },
        { label: 'Emergency Calls', value: appData.userAnalytics.systemUsage.emergencyCalls.toLocaleString() },
        { label: 'Active Patients', value: appData.userAnalytics.activeUsers.patients.toLocaleString() },
        { label: 'Active Doctors', value: appData.userAnalytics.activeUsers.doctors.toLocaleString() },
        { label: 'Partner Pharmacies', value: appData.userAnalytics.activeUsers.pharmacies.toLocaleString() }
    ];

    container.innerHTML = '';
    
    metrics.forEach(metric => {
        const metricItem = document.createElement('div');
        metricItem.className = 'healthcare-metric';
        
        metricItem.innerHTML = `
            <div class="metric-value">${metric.value}</div>
            <div class="metric-label">${metric.label}</div>
        `;
        
        container.appendChild(metricItem);
    });
}

function createUserActivityChart() {
    const ctx = document.getElementById('userActivityChart');
    if (!ctx) return;

    const data = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'Patients',
                data: [1200, 1900, 1600, 2100, 1800, 1400, 1100],
                backgroundColor: 'rgba(31, 184, 205, 0.6)',
                borderColor: '#1FB8CD',
                borderWidth: 2
            },
            {
                label: 'Doctors',
                data: [80, 120, 100, 140, 110, 90, 70],
                backgroundColor: 'rgba(255, 193, 133, 0.6)',
                borderColor: '#FFC185',
                borderWidth: 2
            }
        ]
    };

    charts.userActivity = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top'
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Security Functions
function loadSecurityStatus() {
    loadSecurityMetrics();
    loadComplianceStatus();
    loadSSLCertificates();
}

function loadSecurityMetrics() {
    const container = document.getElementById('securityStatus');
    if (!container) return;

    const vulnerabilities = appData.securityStatus.vulnerabilities;
    const securityItems = [
        { label: 'Critical', value: vulnerabilities.critical, level: 'high' },
        { label: 'High', value: vulnerabilities.high, level: 'high' },
        { label: 'Medium', value: vulnerabilities.medium, level: 'medium' },
        { label: 'Low', value: vulnerabilities.low, level: 'low' }
    ];

    container.innerHTML = '';
    
    securityItems.forEach(item => {
        const securityItem = document.createElement('div');
        securityItem.className = 'security-item';
        
        securityItem.innerHTML = `
            <div class="security-value">${item.value}</div>
            <div class="security-label">${item.label}</div>
        `;
        
        container.appendChild(securityItem);
    });
}

function loadComplianceStatus() {
    const container = document.getElementById('complianceStatus');
    if (!container) return;

    const compliance = appData.securityStatus.compliance;
    const complianceItems = [
        { label: 'HIPAA', status: compliance.hipaa },
        { label: 'GDPR', status: compliance.gdpr },
        { label: 'Last Audit', status: compliance.lastAudit },
        { label: 'Next Audit', status: compliance.nextAudit }
    ];

    container.innerHTML = '';
    
    complianceItems.forEach(item => {
        const complianceItem = document.createElement('div');
        complianceItem.className = 'compliance-item';
        
        complianceItem.innerHTML = `
            <div class="security-label">${item.label}</div>
            <div class="security-value" style="font-size: 14px;">${item.status}</div>
        `;
        
        container.appendChild(complianceItem);
    });
}

function loadSSLCertificates() {
    const container = document.getElementById('sslCertificates');
    if (!container) return;

    container.innerHTML = '';
    
    appData.securityStatus.certificates.forEach(cert => {
        const certItem = document.createElement('div');
        certItem.className = 'certificate-item';
        
        certItem.innerHTML = `
            <div class="cert-info">
                <h4>${cert.domain}</h4>
                <p>Issued by ${cert.issuer} • Expires ${cert.expires}</p>
            </div>
            <div class="cert-status">${cert.status}</div>
        `;
        
        container.appendChild(certItem);
    });
}

// Team Collaboration Functions
function loadTeamCollaboration() {
    // Team members are already loaded in HTML
    // Calendar events are already loaded in HTML
    // Chat messages are already loaded in HTML
}

// Documentation Functions
function loadDocumentation() {
    // Documentation content is already loaded in HTML
}

function searchDocumentation(searchTerm) {
    showMessage(`Searching documentation for: "${searchTerm}"`, 'info');
}

// Settings Functions
function loadDeveloperSettings() {
    // Settings are already loaded in HTML
}

function handleProfileUpdate(e) {
    e.preventDefault();
    
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const githubUsername = document.getElementById('githubUsername').value;
    
    // Update the developer info in the sidebar
    const developerName = document.querySelector('.developer-name');
    if (developerName) {
        developerName.textContent = fullName;
    }
    
    showMessage('Profile updated successfully!', 'success');
}

// Action Functions
function createBranch() {
    showMessage('Creating new feature branch...', 'info');
    setTimeout(() => {
        showMessage('Branch "feature/new-feature" created successfully!', 'success');
    }, 2000);
}

function deployStaging() {
    showMessage('Deploying to staging environment...', 'info');
    setTimeout(() => {
        showMessage('Deployment to staging completed successfully!', 'success');
    }, 3000);
}

function runTests() {
    showMessage('Running test suite...', 'info');
    setTimeout(() => {
        showMessage('All tests passed successfully!', 'success');
    }, 5000);
}

function createRepository() {
    showMessage('Repository creation dialog would open here', 'info');
}

function viewRepository(repoName) {
    showMessage(`Opening ${repoName} in browser...`, 'info');
}

function cloneRepository(repoName) {
    showMessage(`Cloning ${repoName}...`, 'info');
}

function openInIDE(repoName) {
    showMessage(`Opening ${repoName} in VS Code...`, 'info');
}

function testAllApis() {
    showMessage('Running API tests...', 'info');
    setTimeout(() => {
        showMessage('All API tests completed successfully!', 'success');
    }, 3000);
}

function openQueryBuilder() {
    showMessage('Opening advanced query builder...', 'info');
}

function executeQuery() {
    const query = document.getElementById('quickQuery').value;
    if (!query.trim()) {
        showMessage('Please enter a query to execute', 'error');
        return;
    }
    showMessage('Executing query...', 'info');
    setTimeout(() => {
        showMessage('Query executed successfully!', 'success');
    }, 2000);
}

function explainQuery() {
    const query = document.getElementById('quickQuery').value;
    if (!query.trim()) {
        showMessage('Please enter a query to explain', 'error');
        return;
    }
    showMessage('Generating query execution plan...', 'info');
}

function refreshMetrics() {
    showMessage('Refreshing system metrics...', 'info');
    setTimeout(() => {
        showMessage('Metrics updated successfully!', 'success');
    }, 1500);
}

function exportMetrics() {
    showMessage('Exporting metrics data...', 'info');
    setTimeout(() => {
        showMessage('Metrics exported to CSV!', 'success');
    }, 2000);
}

function createIssue() {
    showMessage('Opening issue creation form...', 'info');
}

function triggerDeployment() {
    showMessage('Triggering deployment pipeline...', 'info');
    setTimeout(() => {
        showMessage('Deployment pipeline started!', 'success');
    }, 2000);
}

function exportAnalytics() {
    showMessage('Exporting analytics data...', 'info');
}

function runSecurityScan() {
    showMessage('Running security vulnerability scan...', 'info');
    setTimeout(() => {
        showMessage('Security scan completed! No critical vulnerabilities found.', 'success');
    }, 4000);
}

function createDoc() {
    showMessage('Opening documentation editor...', 'info');
}

function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    
    if (!message) return;
    
    // Add message to chat (simplified)
    showMessage(`Message sent: "${message}"`, 'success');
    input.value = '';
}

function regenerateKey(keyType) {
    showMessage(`Regenerating ${keyType} API key...`, 'info');
    setTimeout(() => {
        showMessage(`${keyType} API key regenerated successfully!`, 'success');
    }, 2000);
}

function copyKey(keyType) {
    showMessage(`${keyType} API key copied to clipboard!`, 'success');
}

// Utility Functions
function formatSystemName(key) {
    return key.replace(/([A-Z])/g, ' $1')
              .replace(/^./, str => str.toUpperCase())
              .replace(/([a-z])([A-Z])/g, '$1 $2');
}

function formatMetricName(key) {
    return key.replace(/([A-Z])/g, ' $1')
              .replace(/^./, str => str.toUpperCase());
}

function getTimeAgo(timestamp) {
    const now = new Date();
    const time = new Date(timestamp);
    const diffInHours = Math.floor((now - time) / (1000 * 60 * 60));
    
    if (diffInHours < 1) {
        const diffInMinutes = Math.floor((now - time) / (1000 * 60));
        return `${diffInMinutes} minutes ago`;
    } else if (diffInHours < 24) {
        return `${diffInHours} hours ago`;
    } else {
        const diffInDays = Math.floor(diffInHours / 24);
        return `${diffInDays} days ago`;
    }
}

function setActiveFilter(activeBtn) {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    activeBtn.classList.add('active');
}

function showMessage(message, type = 'info') {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'success-message';
    messageDiv.textContent = message;
    
    document.body.appendChild(messageDiv);
    
    // Show message
    setTimeout(() => {
        messageDiv.classList.add('show');
    }, 100);
    
    // Hide message
    setTimeout(() => {
        messageDiv.classList.remove('show');
        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.parentNode.removeChild(messageDiv);
            }
        }, 300);
    }, 3000);
}

function toggleDarkMode() {
    const isDark = document.getElementById('darkMode').checked;
    document.body.setAttribute('data-color-scheme', isDark ? 'dark' : 'light');
}

function toggleAutoRefresh() {
    const isEnabled = document.getElementById('autoRefresh').checked;
    
    if (isEnabled) {
        startAutoRefresh();
        showMessage('Auto-refresh enabled', 'success');
    } else {
        stopAutoRefresh();
        showMessage('Auto-refresh disabled', 'info');
    }
}

function startAutoRefresh() {
    stopAutoRefresh(); // Clear existing interval
    autoRefreshInterval = setInterval(() => {
        if (currentPage === 'overview') {
            loadSystemHealth();
            loadRecentActivity();
        } else if (currentPage === 'monitoring') {
            loadServerResources();
            loadActiveAlerts();
        } else if (currentPage === 'api-management') {
            // Simulate API metric updates
            const metrics = document.querySelectorAll('.endpoint-metric__value');
            metrics.forEach(metric => {
                if (metric.textContent.includes('ms')) {
                    const currentValue = parseInt(metric.textContent);
                    const variation = Math.floor(Math.random() * 20) - 10;
                    metric.textContent = `${Math.max(50, currentValue + variation)}ms`;
                }
            });
        }
    }, 30000); // Refresh every 30 seconds
}

function stopAutoRefresh() {
    if (autoRefreshInterval) {
        clearInterval(autoRefreshInterval);
    }
}

// Initialize tooltips and other UI enhancements
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects for interactive elements
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Add loading states for buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
            this.disabled = true;
            
            setTimeout(() => {
                this.innerHTML = originalText;
                this.disabled = false;
            }, 2000);
        });
    });
});