import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { EnvelopeDownloadAlt, EnvelopeDownloadAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/EnvelopeDownloadAlt",
  component: EnvelopeDownloadAlt,
} as ComponentMeta<typeof EnvelopeDownloadAlt>;

const Template: ComponentStory<typeof EnvelopeDownloadAlt> = (
  args: EnvelopeDownloadAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <EnvelopeDownloadAlt {...args} />
    <EnvelopeDownloadAlt {...args} fill="red.500" />
    <EnvelopeDownloadAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
