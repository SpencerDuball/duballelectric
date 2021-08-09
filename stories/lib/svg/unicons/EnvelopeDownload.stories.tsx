import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { EnvelopeDownload, EnvelopeDownloadPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/EnvelopeDownload",
  component: EnvelopeDownload,
} as ComponentMeta<typeof EnvelopeDownload>;

const Template: ComponentStory<typeof EnvelopeDownload> = (
  args: EnvelopeDownloadPropsI
) => (
  <x.div display="flex" gap="20px">
    <EnvelopeDownload {...args} />
    <EnvelopeDownload {...args} fill="red.500" />
    <EnvelopeDownload {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
