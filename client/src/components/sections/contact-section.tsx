<h3 className="text-2xl font-bold text-gray-900 mb-8">Request Free Consultation</h3>
<form onSubmit={handleSubmit} className="space-y-6">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <Label htmlFor="fullName" className="text-blue-800 font-semibold">
        Full Name *
      </Label>
      <Input
        id="fullName"
        type="text"
        value={formData.fullName}
        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
        required
        className="mt-2 border-gray-300 focus:border-solar-blue focus:ring-solar-blue"
      />
    </div>
    <div>
      <Label htmlFor="phoneNumber" className="text-blue-800 font-semibold">
        Phone Number *
      </Label>
      <Input
        id="phoneNumber"
        type="tel"
        value={formData.phoneNumber}
        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
        required
        className="mt-2 border-gray-300 focus:border-solar-blue focus:ring-solar-blue"
      />
    </div>
  </div>
  <div>
    <Label htmlFor="email" className="text-blue-800 font-semibold">
      Email Address *
    </Label>
    <Input
      id="email"
      type="email"
      value={formData.email}
      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      required
      className="mt-2 border-gray-300 focus:border-solar-blue focus:ring-solar-blue"
    />
  </div>
  <div>
    <Label className="text-blue-800 font-semibold">Property Type</Label>
    <Select value={formData.propertyType} onValueChange={(value) => setFormData({ ...formData, propertyType: value })}>
      <SelectTrigger className="mt-2 border-gray-300 focus:border-solar-blue focus:ring-solar-blue">
        <SelectValue placeholder="Select property type" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="residential">Residential</SelectItem>
        <SelectItem value="commercial">Commercial</SelectItem>
        <SelectItem value="industrial">Industrial</SelectItem>
      </SelectContent>
    </Select>
  </div>
  <div>
    <Label htmlFor="monthlyBill" className="text-blue-800 font-semibold">
      Monthly Electricity Bill (₹)
    </Label>
    <Input
      id="monthlyBill"
      type="number"
      value={formData.monthlyBill}
      onChange={(e) => setFormData({ ...formData, monthlyBill: e.target.value })}
      className="mt-2 border-gray-300 focus:border-solar-blue focus:ring-solar-blue"
    />
  </div>
  <div>
    <Label htmlFor="requirements" className="text-blue-800 font-semibold">
      Additional Requirements
    </Label>
    <Textarea
      id="requirements"
      value={formData.requirements}
      onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
      rows={4}
      className="mt-2 border-gray-300 focus:border-solar-blue focus:ring-solar-blue"
      placeholder="Tell us about your specific requirements..."
    />
  </div>
  <Button
    type="submit"
    disabled={contactMutation.isPending}
    className="w-full bg-gradient-to-r from-blue-800 to-blue-600 hover:from-blue-900 hover:to-blue-700 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
  >
    {contactMutation.isPending ? (
      "Submitting..."
    ) : (
      "Get Free Consultation"
    )}
  </Button>
</form>