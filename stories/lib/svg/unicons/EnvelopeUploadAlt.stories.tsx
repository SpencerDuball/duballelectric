import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { EnvelopeUploadAlt, EnvelopeUploadAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/EnvelopeUploadAlt",
  component: EnvelopeUploadAlt,
} as ComponentMeta<typeof EnvelopeUploadAlt>;

const Template: ComponentStory<typeof EnvelopeUploadAlt> = (
  args: EnvelopeUploadAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <EnvelopeUploadAlt {...args} />
    <EnvelopeUploadAlt {...args} fill="red.500" />
    <EnvelopeUploadAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
